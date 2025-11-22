def solution(s):
    answer = []
    
    for c in s:
        if answer and answer[-1] == c:
            answer.pop()
        else: 
            answer.append(c)
        
            
    return 1 if not answer else 0