def solution(arr):
    answer = []
    
    answer.append(arr[0])
    
    for n in arr[1:]:
        if answer[len(answer) - 1] == n :
            continue
        else :
            answer.append(n)
            
    return answer
    
    
    
