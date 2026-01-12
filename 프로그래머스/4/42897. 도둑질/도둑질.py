def solution(money):
    n = len(money)
    
    def rob(l, r):
        dp = [0] * n
        dp[l] = money[l]
        dp[l + 1] = max(money[l], money[l + 1])
        
        for i in range(l + 2, r + 1):
            dp[i] = max(dp[i - 1], dp[i - 2] + money[i])     
        
        return dp[r]
    
    return max(rob(0, n - 2), rob(1, n - 1))