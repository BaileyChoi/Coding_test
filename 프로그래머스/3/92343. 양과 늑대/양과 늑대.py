def solution(info, edges):
    answer = 0
    n = len(info)
    graph = [[] for _ in range(n)]

    for a, b in edges:
        graph[a].append(b)
        
    next_nodes = set()
    next_nodes.add(0)
    
    def backtrack(cur, sheep, wolf, next_nodes):
        nonlocal answer
        
        if info[cur]:
            wolf += 1
        else:
            sheep += 1
            
        if wolf >= sheep:
            return
        
        answer = max(answer, sheep)
        
        new_nodes = next_nodes.copy()
        new_nodes.remove(cur)
        new_nodes.update(graph[cur])
        
        for next_node in new_nodes:
            backtrack(next_node, sheep, wolf, new_nodes)
    
    backtrack(0, 0, 0, next_nodes)
    
    return answer