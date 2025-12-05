def solution(m, n, puddles):
    MOD = 1000000007
    dp = [[0] * m for _ in range(n)]
    
    for row in range(n):
        if [1, row + 1] in puddles:
            break
        dp[row][0] = 1
    for col in range(m):
        if [col + 1, 1] in puddles:
            break
        dp[0][col] = 1
                        
    for row in range(1, n):
        for col in range(1, m):
            if [col + 1, row + 1] in puddles:
                dp[row][col] = 0
            else:
                dp[row][col] = (dp[row - 1][col] + dp[row][col - 1]) % MOD
    
    return dp[n - 1][m - 1] % MOD