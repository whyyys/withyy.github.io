# 模板及工具记录

用于记录写题时看到的一些简便操作或是常规问题的代码模板。持续更新~

## 链表结构体

::: info
C语言struct定义需要使用 `typedef struct {} Name;` ，否则定义时需要加关键字 `struct Name p;` ，C++默认将 `struct` 定义的类型作为全局作用域的类型名，而不需要额外的 `typedef` 。
:::

```c++
struct ListNode{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {};
    ListNode(int x) : val(x), next(nullptr) {};
    ListNode(int x, ListNode *next) : val(x), next(next) {};
};

```

## 前缀和

```c++
// 初始化
// vector<int> vec1; vec2.assign(vec1.begin(), vec1.end());
// vector<int> vec2 = {vec1.begin(), vec1.end()};
const vector<int> nums;
vector<int> prefix(nums);
for (int i = 1; i < n; ++i) {
    prefix[i] += prefix[i-1];
}
```

## C{m, n}组合数
```c++{6}
long long combination(int m, int n) {
    if (n > m) return 0;
    if (n > m - n) n = m - n; // C(m, n) == C(m, m-n)
    long long res = 1;
    for (int i = 0; i < n; ++i) {
        res = res * (m - i) / (i + 1);
    }
    return res;
}
```