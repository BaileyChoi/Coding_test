from collections import deque
def solution(n, wires):
    answer = n
    
    # 그래프 만들기
    graph = [[] for _ in range(n + 1)]

    for a, b in wires:
        graph[a].append(b)
        graph[b].append(a)
    
    # 서브트리 개수 구하기
    def bfs(start, graph):
        count = 0
        queue = deque()
        visited = set()
        
        queue.append(start)
        visited.add(start)
        
        while queue:
            cur = queue.popleft()
            count += 1
            
            for next in graph[cur]:
                if next not in visited:
                    queue.append(next)
                    visited.add(next)
        
        return count
    
    # for a, b in wires: 
    for a, b in wires:
        # 전선 끊기
        graph[a].remove(b)
        graph[b].remove(a)
        
        # dfs로 전력망 개수 구하기
        count1 = bfs(a, graph)
        
        # 전선 다시 붙이기
        graph[a].append(b)
        graph[b].append(a)

        # 최소 차이 갱신
        count2 = n - count1 
        cur_diff = abs(count1 - count2)
        answer = min(answer, cur_diff)
        
    return answer
    