def solution(citations):
    n = len(citations)
    citations.sort()
    
    for i, c in enumerate(citations):
        h = n - i
        if c >= h:
            return h
    
    return 0
    
