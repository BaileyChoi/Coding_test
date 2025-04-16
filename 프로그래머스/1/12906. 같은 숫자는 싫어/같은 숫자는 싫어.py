def solution(arr):
    answer = []
    
    answer.append(arr[0])
    
    for n in arr[1:]:
        if answer[-1] != n :
            answer.append(n)
            
    return answer
    
    
    
