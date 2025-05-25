from collections import deque

# 백준 입력값 처리
N, K = map(int, input().split())


def solution(N, K):
    MAX = 100001
    queue = deque()
    visited = [False] * MAX

    queue.append((N, 0))
    visited[N] = True

    while queue:
        cur, time = queue.popleft()

        if cur == K:
            return time

        for next in (cur + 1, cur - 1, cur * 2):
            if 0 <= next < MAX and not visited[next]:
                queue.append((next, time + 1))
                visited[next] = True


print(solution(N, K))
