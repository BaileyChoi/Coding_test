def solution(n, computers):
    answer = 0

    def dfs(cur, visited, computers):
        visited.add(cur)
        for next in range(n):
            if computers[cur][next] == 1 and next not in visited:
                dfs(next, visited, computers)

    visited = set()
    for i in range(n):
        if i not in visited:
            dfs(i, visited, computers) 
            answer += 1

    return answer

# 테스트
print(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
print(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))
