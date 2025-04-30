def solution(m, n, puddles):
    MOD =  1000000007
    
#     dp = [[0] * m for _ in range(n)]
    
#     # 웅덩이 처리
#     for x, y in puddles:
#         dp[y - 1][x - 1] = -1
        
#     # 출발점
#     dp[0][0] = 1
    
#     # 첫 번째 행
#     for i in range(1, m):
#         if dp[0][i] == -1:
#             dp[0][i] = 0
#         else:
#             dp[0][i] = dp[0][i -1]        
    
#     # 첫 번째 열
#     for i in range(1, n):
#         if dp[i][0] == -1:
#             dp[i][0] = 0
#         else:
#             dp[i][0] = dp[i - 1][0]
        
    
#     # 나머지 채우기
#     for i in range(1, n):
#         for j in range(1, m):
#             if dp[i][j] == -1:
#                 dp[i][j] = 0
#                 continue
#             dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD
    
    
#     return dp[n - 1][m - 1]

    dp = [0] * (m+1)  # 열 개수만큼 1차원 배열
    dp[1] = 1  # 시작점

    puddles = {(x, y) for x, y in puddles}  # 빠른 lookup을 위해 set 변환

    for y in range(1, n+1):
        for x in range(1, m+1):
            if (x, y) in puddles:
                dp[x] = 0
            else:
                dp[x] = (dp[x] + dp[x-1]) % MOD

    return dp[m]