def solution(money):
    
    def rob(arr):
        n = len(arr)
        
        dp = [0] * n
        dp[0] = arr[0]
        dp[1] = max(arr[0], arr[1])
        
        for i in range(2, n):
            dp[i] = max(dp[i - 1], dp[i - 2] + arr[i])
            
        return dp[-1]

    if len(money) == 1:
        return money[0]
    
    return max(rob(money[:-1]), rob(money[1:]))