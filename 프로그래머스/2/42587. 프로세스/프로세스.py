from collections import deque

def solution(priorities, location):
    queue = deque((i, p) for i, p in enumerate(priorities))
    
    order = 1
    while queue:
        loc, pri = queue.popleft()
        
        if queue and pri < max(queue, key= lambda x : x[1])[1]:
            queue.append((loc, pri))
        else:
            if loc == location:
                return order
            order += 1