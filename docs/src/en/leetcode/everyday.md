# LeetCode Daily Problems

::: tip Welcome to Learning!
Welcome to my LeetCode Daily Problem Solutions Collection! Here I record the algorithm challenges I solve every day to consolidate basics and improve programming skills. Each entry includes problem description, examples, ideas, and code implementation. Let's progress together!
:::

::: info Record Structure
Each day's record includes the following:
- **Problem Description**: Background, input/output, and constraints.
- **Examples**: Typical input/output examples.
- **Solution Ideas**: Overview of the solution approach.
- **Code Implementation**: C++ code, focusing on efficiency.
:::

::: tip Learning Goals
Through daily practice, track learning progress for easy review. Records are organized by date for convenient lookup.
:::

## 2026-01-08

### 1458. Max Dot Product of Two Subsequences

#### Problem Description

::: info Problem Background
Given two arrays nums1 and nums2. Return the maximum dot product of two subsequences of the same length from nums1 and nums2. A non-empty subsequence is formed by deleting some or no elements from the array without changing the relative order of the remaining elements.
:::

#### Examples

::: details Example 1
Input: nums1 = [2,1,-2,5], nums2 = [3,0,-6]  
Output: 18  
Explanation: Subsequence [2,-2] from nums1 and [3,-6] from nums2. Dot product: (2*3 + (-2)*(-6)) = 18.
:::

::: details Example 2
Input: nums1 = [3,-2], nums2 = [2,-6,7]  
Output: 21  
Explanation: Subsequence [3] from nums1 and [7] from nums2. Dot product: 3*7 = 21.
:::

::: details Example 3
Input: nums1 = [-1,-1], nums2 = [1,1]  
Output: -1  
Explanation: Subsequence [-1] from nums1 and [1] from nums2. Dot product: -1.
:::

#### Solution Ideas

::: tip Core Idea
Use dynamic programming. Define dp[i][j] as the maximum dot product considering the first i elements of nums1 and first j of nums2. Transition: dp[i][j] = max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1] + nums1[i-1] * nums2[j-1]).
:::

::: details More Details
This DP is similar to longest common subsequence but optimized for maximum dot product. Time O(n*m), space O(n*m). Initialize to negative infinity for non-empty subsequences.
:::

#### Code

::: warning Notes
The code uses recursive DFS, which may cause stack overflow for large data. Suggest optimizing to iterative DP for better efficiency.
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