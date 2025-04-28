def solution(N, number):
    if N == number:
        return 1
    
    dp = [set() for _ in range(9)] # dp[1] ~ dp[8] (0번은 안 씀)
    
    for i in range(1, 9):
        dp[i].add(int(str(N) * i)) # 숫자 이어붙이기 (5, 55, 555, 5555)
        
        for j in range(1, i):
            for a in dp[j]:
                for b in dp[i - j]:
                    dp[i].add(a + b)
                    dp[i].add(a - b)
                    dp[i].add(a * b)
                    if b != 0:
                        dp[i].add(a // b)
        if number in dp[i]:
            return i
    
    return -1