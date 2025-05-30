from collections import deque

def solution(info, edges):
    answer = 0
    
    queue = deque()
    
    queue.append((1, 0, 0, []))
    
    while queue:
        sheep, wolf, cur, nodes = queue.popleft()
        
        # 답 갱신
        answer = max(answer, sheep)
        
        # 자식 노드 추가하기
        
        for parent, child in edges:
            if parent == cur and child not in nodes:
                nodes.append(child)
    
        # 다음 노드 예약
        for next in nodes:  
            new_next = nodes.copy()
            new_next.remove(next)
            
            # if 양인 경우:
            if info[next] == 0:
                queue.append((sheep + 1, wolf, next, new_next))
            # else: 늑대인 경우
            else:
                if sheep > wolf + 1:
                    queue.append((sheep, wolf + 1, next, new_next))
                    
    return answer