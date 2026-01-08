<template>
  <canvas ref="canvas" class="grid-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement>()
let ctx: CanvasRenderingContext2D
let raf = 0
let time = 0

/* ---------- 网格参数 ---------- */
const edge = 50            // 三角形边长（像素），平衡密度和内存
const hEdge = edge * 0.866 // 等高三角形高度
const triangles: Triangle[] = []

class Dot {
  x: number; y: number
  glow = 0                // 0-1 发光强度
  constructor (x: number, y: number) { this.x = x; this.y = y }
}

class Triangle {
  a: Dot; b: Dot; c: Dot
  vx: number; vy: number // 整体速度
  constructor (a: Dot, b: Dot, c: Dot) { 
    this.a = a; this.b = b; this.c = c
    this.vx = (Math.random() - 0.5) * 0.6
    this.vy = (Math.random() - 0.5) * 0.6
  }
  /* 计算重心到鼠标距离 */
  dist (mx: number, my: number) {
    const cx = (this.a.x + this.b.x + this.c.x) / 3
    const cy = (this.a.y + this.b.y + this.c.y) / 3
    return Math.hypot(cx - mx, cy - my)
  }
}

/* ---------- 生成随机三角形 ---------- */
function buildGrid () {
  triangles.length = 0
  const area = innerWidth * innerHeight
  const numTriangles = Math.min(100, Math.max(50, Math.floor(area / 10000))) // 更多数量，营造凌乱效果
  for (let i = 0; i < numTriangles; i++) {
    const centerX = Math.random() * innerWidth
    const centerY = Math.random() * innerHeight
    const size = 35 // 保持尺寸
    const a = new Dot(centerX + (Math.random() - 0.5) * size, centerY + (Math.random() - 0.5) * size)
    const b = new Dot(centerX + (Math.random() - 0.5) * size, centerY + (Math.random() - 0.5) * size)
    const c = new Dot(centerX + (Math.random() - 0.5) * size, centerY + (Math.random() - 0.5) * size)
    const t = new Triangle(a, b, c)
    triangles.push(t)
  }
}

let frame = 0
let lastCatTime = 0
const cats: Cat[] = []

class Cat {
  x: number; y: number
  speed: number
  constructor() {
    this.x = -50
    this.y = innerHeight / 2 + (Math.random() - 0.5) * 200
    this.speed = 2 + Math.random() * 2
  }
}

/* ---------- 动画循环 ---------- */
let mouse = { x: -999, y: -999 }

function loop (timestamp: number) {
  time = timestamp * 0.001 // 秒
  frame++
  ctx.clearRect(0, 0, innerWidth, innerHeight)

  /* 更新 glow */
  const maxDist = 80 // 扩大范围
  for (const t of triangles) {
    const d = t.dist(mouse.x, mouse.y)
    const target = d < maxDist ? Math.max(0.1, 1 - d / maxDist) : 0.05  // 最低发光
    t.a.glow += (target - t.a.glow) * 0.1
    t.b.glow += (target - t.b.glow) * 0.1
    t.c.glow += (target - t.c.glow) * 0.1
  }

  /* 每隔一段时间随机改变方向 */
  if (frame % 300 === 0) { // 每300帧改变一次
    for (const t of triangles) {
      if (Math.random() < 0.7) { // 70%概率改变
        t.vx = (Math.random() - 0.5) * 0.6
        t.vy = (Math.random() - 0.5) * 0.6
      }
    }
  }

  /* 整体平移，保持大小不变 */
  for (const t of triangles) {
    t.a.x += t.vx
    t.a.y += t.vy
    t.b.x += t.vx
    t.b.y += t.vy
    t.c.x += t.vx
    t.c.y += t.vy
  }

  /* 填充三角形 */
  for (const t of triangles) {
    const avgGlow = (t.a.glow + t.b.glow + t.c.glow) / 3
    if (avgGlow < 0.01) continue
    const cx = (t.a.x + t.b.x + t.c.x) / 3
    const cy = (t.a.y + t.b.y + t.c.y) / 3
    const hue = (200 + avgGlow * 100 + time * 20 + cx * 0.05 + cy * 0.05) % 360 // 添加位置因子，增加形状多样性
    const saturation = 90 + avgGlow * 10 // 更高饱和度
    const lightness = 70 + avgGlow * 30 // 更高亮度
    const alpha = avgGlow * 1.0 // 满透明度，使颜色更明晰
    ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
    ctx.beginPath()
    ctx.moveTo(t.a.x, t.a.y)
    ctx.lineTo(t.b.x, t.b.y)
    ctx.lineTo(t.c.x, t.c.y)
    ctx.closePath()
    ctx.fill()
    // 添加边线，使更明显
    ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${avgGlow * 0.7})`
    ctx.lineWidth = 0.8
    ctx.stroke()
  }

  raf = requestAnimationFrame(loop)
}

/* ---------- 生命周期 ---------- */
onMounted(() => {
  const el = canvas.value!
  ctx = el.getContext('2d')!
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })
  loop(0)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
})

function resize () {
  const el = canvas.value!
  el.width = innerWidth * devicePixelRatio
  el.height = innerHeight * devicePixelRatio
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.scale(devicePixelRatio, devicePixelRatio)
  buildGrid()
}
</script>

<style scoped>
.grid-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}
</style>