def solution(n, wires):
    min_diff = float('inf')
    
    # 그래프 생성
    graph = [[] for _ in range(n + 1)]
    
    for a, b in wires:
        graph[a].append(b)
        graph[b].append(a)        
        
    def dfs(start, visited, graph):
        visited.add(start)
        count = 1
        for next in graph[start]:
            if next not in visited:
                count += dfs(next, visited, graph)
        return count
        
    for a, b in wires:
        # 전선 끊기
        graph[a].remove(b)
        graph[b].remove(a)   
    
        # 송전탑 개수 구하기
        visited = set()
        count1 = dfs(a, visited, graph)
        count2 = n - count1
    
        # 전선 연결
        graph[a].append(b)
        graph[b].append(a)     
        
        # 최소 차이 갱신
        diff = abs(count1 - count2)
        min_diff = min(min_diff, diff)
    
    return min_diff