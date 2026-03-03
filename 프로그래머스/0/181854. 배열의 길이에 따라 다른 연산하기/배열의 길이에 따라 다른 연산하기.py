def solution(arr, n):
    answer = []
    
    if len(arr) % 2 == 1:
        for i, a in enumerate(arr):
            if i % 2 == 0:
                answer.append(a + n)
            else:
                answer.append(a)
    else:
        for i, a in enumerate(arr):
            if i % 2 == 0:
                answer.append(a)
            else:
                answer.append(a + n)
                
    return answer