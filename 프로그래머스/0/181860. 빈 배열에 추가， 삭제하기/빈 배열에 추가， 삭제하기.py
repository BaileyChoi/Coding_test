def solution(arr, flag):
    answer = []
    
    for i, v in enumerate(flag):
        if v:
            for j in range(arr[i]):
                answer.append(arr[i])
                answer.append(arr[i])
        else:
            answer = answer[:-arr[i]]
            
    return answer