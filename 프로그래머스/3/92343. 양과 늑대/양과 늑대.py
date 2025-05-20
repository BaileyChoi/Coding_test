def solution(info, edges):
    answer = 0
    sheep, wolf = 0, 0
    
    n = len(info)

    # 그래프 만들기
    graph = [[] for _ in range(n)]
    for a, b in edges:
        graph[a].append(b)
        
    next_nodes = set()
    
    def backtrack(cur, sheep, wolf, next_nodes):
        nonlocal answer
        
        if info[cur]:
            wolf += 1
        else:
            sheep += 1
            
        if wolf >= sheep:
            return
        
        answer = max(answer, sheep)
        
        # 현재 노드에서 연결된 자식 노드들을 후보에 추가
        next_nodes.update(graph[cur])
           
        # 현재 노드는 후보에서 제거 (중복 방문 방지)    
        for next in next_nodes:
            new_nodes = next_nodes.copy()
            new_nodes.remove(next)
            backtrack(next, sheep, wolf, new_nodes)
    
    backtrack(0, sheep, wolf, next_nodes)
    return answer