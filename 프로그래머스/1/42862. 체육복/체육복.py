def solution(n, lost, reserve):
    answer = 0
    
    own = [1] * n
    
    for i in lost:
        own[i - 1] -= 1
        
    for i in reserve:
        own[i - 1] += 1
        
    for i, o in enumerate(own):
        if o == 0:
            if i - 1 >= 0 and own[i - 1] == 2:
                own[i] += 1
                own[i - 1] -= 1
            elif i + 1 < n and own[i + 1] == 2:
                own[i] += 1
                own[i + 1] -= 1   
  
    for o in own:
        if o > 0:
            answer += 1
    
    return answer