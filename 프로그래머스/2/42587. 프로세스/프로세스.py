from collections import deque

def solution(priorities, location):
    queue = deque((i, p) for i, p in enumerate(priorities))
    
    order = 1
    while queue:
        loc, pri = queue.popleft()
        
        if any(p > pri for _, p in queue):
            queue.append((loc, pri))
        else:
            if loc == location:
                return order
            order += 1