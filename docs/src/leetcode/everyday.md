# 力扣力扣--每日一题

::: tip 欢迎学习！
欢迎来到我的LeetCode每日一题解答集！这里记录了我每天解决的算法挑战，帮助巩固基础，提升编程技能。每个条目包括题目描述、示例、思路和代码实现。让我们一起进步吧！
:::

::: info 记录结构
每一天的记录包含以下内容：
- **题目描述**：问题背景、输入输出和约束。
- **示例**：典型输入输出示例。
- **解答思路**：解题思路概述。
- **代码实现**：C++代码，注重效率。
:::

::: tip 学习目标
通过每日练习，追踪学习进度，便于复习查阅。记录按日期组织，方便查找。
:::

## 2026-01-08

### 1458. 两个子序列的最大点积

#### 题目描述

::: info 问题背景
给你两个数组 nums1 和 nums2 。请你返回 nums1 和 nums2 中两个长度相同的 非空 子序列的最大点积。数组的非空子序列是通过删除原数组中某些元素（可能一个也不删除）后剩余数字组成的序列，但不能改变数字间相对顺序。
:::

#### 示例

::: details 示例 1
输入：nums1 = [2,1,-2,5], nums2 = [3,0,-6]  
输出：18  
解释：从 nums1 中得到子序列 [2,-2] ，从 nums2 中得到子序列 [3,-6] 。它们的点积为 (2*3 + (-2)*(-6)) = 18 。
:::

::: details 示例 2
输入：nums1 = [3,-2], nums2 = [2,-6,7]  
输出：21  
解释：从 nums1 中得到子序列 [3] ，从 nums2 中得到子序列 [7] 。它们的点积为 (3*7) = 21 。
:::

::: details 示例 3
输入：nums1 = [-1,-1], nums2 = [1,1]  
输出：-1  
解释：从 nums1 中得到子序列 [-1] ，从 nums2 中得到子序列 [1] 。它们的点积为 -1 。
:::

#### 解答思路

::: tip 核心思路
使用动态规划。定义 dp[i][j] 为考虑 nums1 的前 i 个元素和 nums2 的前 j 个元素时，两个子序列的最大点积。转移方程为 dp[i][j] = max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1] + nums1[i-1] * nums2[j-1])。
:::

::: details 更多细节
这个DP类似于最长公共子序列，但优化了点积最大化。时间复杂度O(n*m)，空间复杂度O(n*m)。注意初始化为负无穷以处理非空子序列。
:::

#### 代码

::: warning 注意事项
代码使用了递归DFS实现，可能在大数据量下有栈溢出风险。建议优化为迭代DP以提高效率。
:::

```cpp
#include <algorithm> 
class Solution {
public:
    int dfs(const auto& nums1, const auto& nums2, int row, int col, int l1, int l2, int c, auto& mem){
        if(mem[row][col] != 1e9) return mem[row][col];
        if(row == l1 || col == l2){
            return c==0?-1e9:0;
        }
        vector<int>tmp(l2-col+1, 0);
        for(int i = col; i<l2+1; i++){
            if(i<l2) tmp[i-col] = nums1[row]*nums2[i] + dfs(nums1, nums2, row+1, i+1, l1, l2, c+1, mem);
            else tmp[i-col] = dfs(nums1, nums2, row+1, col, l1, l2, c, mem);
        }
        mem[row][col] = *std::max_element(tmp.begin(), tmp.end());
        return mem[row][col];
    }
    int maxDotProduct(vector<int>& nums1, vector<int>& nums2) {
        int l1 = nums1.size(), l2 = nums2.size();
        vector<vector<int>> mem(l1+1,vector<int>(l2+1,1e9));
        return dfs(nums1, nums2, 0, 0, l1, l2, 0, mem);
    }
};
```
