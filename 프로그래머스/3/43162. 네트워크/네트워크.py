def solution(n, computers):
    total = 0
    visited = [False] * n
    
    def dfs(start, visited, graph):
        visited[start] = True
        
        for next in range(n):
            if not visited[next] and graph[start][next] == 1:
                dfs(next, visited, graph)
    
    for i in range(n):
        if visited[i]:
            continue
        dfs(i, visited, computers)
        total += 1
    
    return total