from collections import deque

def solution(priorities, location):
    queue = deque()
    
    for i in range(len(priorities)):
        queue.append((priorities[i], i))
    
    order = 1
    while queue:
        pri, loc = queue.popleft()
        
        if not queue:
            return order
        
        if pri < max(list(queue), key= lambda x : x[0])[0]:
            queue.append((pri, loc))
        else:
            if loc == location:
                return order
            order += 1