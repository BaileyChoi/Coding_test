def solution(citations):
    n = len(citations)
    citations.sort()
    
    if citations[-1] == 0:
            return 0
    
    for h in range(n, -1, -1):
        if citations[n - h] >= h:
            return h
    
