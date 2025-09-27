def solution(citations):
    answer = 0
    
    citations.sort(reverse=True)
    
    for i, c in enumerate(citations, start=1):
        if c >= i:
            answer = i
        else:
            break
            
    return answer