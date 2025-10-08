def solution(arr):
    answer = []
    m = min(arr)
    
    for a in arr:
        if a != m:
            answer.append(a)
    
    return answer if len(answer) > 0 else [-1]