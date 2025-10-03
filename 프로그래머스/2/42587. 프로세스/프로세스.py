from collections import deque

def solution(priorities, location):
    answer = []
    
    queue = deque([(i, p) for i, p in enumerate(priorities)])
    
    while queue:
        cur = queue.popleft()
        
        # 큐 안에 더 높은 우선순위가 있다면 뒤로 보냄
        if any(cur[1] < q[1] for q in queue):
            queue.append(cur)
        else:
            answer.append(cur[0])
            
    return answer.index(location) + 1
        