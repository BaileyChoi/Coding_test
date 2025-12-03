from collections import deque

def can_change(w1, w2):
    diff = 0
    for c1, c2 in zip(w1, w2):
        if c1 != c2:
            diff += 1
        if diff > 1:
            return False
    return diff == 1

def solution(begin, target, words):
    queue = deque()
    visited = set()
    queue.append((begin, 0))
    
    while queue:
        cur, change = queue.popleft()
        
        if cur == target:
            return change
        
        for new in words:
            if new not in visited and can_change(cur, new):
                visited.add(new)
                queue.append((new, change + 1))
                
    return 0
