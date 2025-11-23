def solution(n, computers):
    answer = 0
    visited = [False] * n
    
    def dfs(start, visited, graph):
        visited[start] = True
        
        for next in range(n):
            if not visited[next] and graph[start][next]:
                dfs(next, visited, graph)
    
    for i in range(n):
        if not visited[i]:
            answer += 1
            dfs(i, visited, computers)
    
    return answer