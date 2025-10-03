from collections import deque

def solution(priorities, location):
    answer = []
    
    queue = deque(range(len(priorities)))
    
    # 우선순위 높은 프로세스 찾기
    def is_top_rank(cur, queue):
        for q in queue:
            if priorities[q] > priorities[cur]:
                return False
        return True
    
    while queue:
        cur = queue.popleft()
        
        if is_top_rank(cur, queue):
            answer.append(cur)
        else:
            queue.append(cur)
            
    return answer.index(location) + 1