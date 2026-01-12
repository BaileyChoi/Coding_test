def solution(money):
    n = len(money)
    
    def rob(l, r):
        m = r - l + 1
        dp = [0] * m
        dp[0] = money[l]
        dp[1] = max(money[l], money[l + 1])
        
        for i in range(2, m):
            dp[i] = max(dp[i - 1], money[l + i] + dp[i - 2])     
        
        return dp[-1]
    
    return max(rob(0, n - 2), rob(1, n - 1))