def solution(n, wires):
    # dfs를 통해 하나의 서브트리 크기 계산
    def dfs(start, visited, graph):
        visited.add(start)
        count = 1   # 현재 노드를 포함한 개수

        for neighbor in graph[start]:
            if neighbor not in visited:
                count += dfs(neighbor, visited, graph)
        
        return count 
    
    min_diff = n    # 최대 차이로 초기화
    
    # 모든 간선 중 하나를 끊었을 경우
    for i in range(len(wires)):
        # i번째 간선을 제외하고 일시 그래프 구성
        graph = [[] for _ in range(n + 1)]
        for j, (a, b) in enumerate(wires):
            if i == j:
                continue    # i번째 간선은 끊어서 처리
            graph[a].append(b)
            graph[b].append(a)
        
        # dfs로 한 쪽 서브트리의 노드 수 계산
        visited = set()
        subtree_size = dfs(1, visited, graph)
        # 두 개의 전력망의 차이 계산
        cur_diff = abs(n - subtree_size * 2)
        # 최소 차이값 갱신
        min_diff = min(min_diff, cur_diff)
    
    return min_diff