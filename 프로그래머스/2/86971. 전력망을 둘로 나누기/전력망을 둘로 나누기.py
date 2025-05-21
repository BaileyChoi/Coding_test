def solution(n, wires):
    min_diff = n
    
    def dfs(start, visited, graph):
        visited[start] = True
        count = 1
        
        for neighbor in graph[start]:
            if not visited[neighbor]:
                count += dfs(neighbor, visited, graph)
    
        return count
        
        
    for i in range(len(wires)):
        graph = [[] for _ in range(n + 1)]
        for j, (a, b) in enumerate(wires):
            if i == j:
                 continue
            graph[a].append(b)
            graph[b].append(a)
        
        visited = [False] * (n + 1)
        subtree_size = dfs(1, visited, graph)
        min_diff = min(min_diff, abs(n - subtree_size * 2))
    
    return min_diff