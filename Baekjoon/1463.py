# 1로 만들기
import sys

# sys.stdin = open("example.txt", "r")
input = sys.stdin.readline

N = int(input().strip())

dp = [0] * (N + 1)

for i in range(2, N + 1):
    # 1을 뺀 경우
    dp[i] = dp[i - 1] + 1

    # 2로 나누어 떨어지는 경우
    if i % 2 == 0:
        dp[i] = min(dp[i], dp[i // 2] + 1)

    # 3으로 나누어 떨어지는 경우
    if i % 3 == 0:
        dp[i] = min(dp[i], dp[i // 3] + 1)

print(dp[N])
