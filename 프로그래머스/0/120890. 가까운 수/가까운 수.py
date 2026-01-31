def solution(array, n):
    answer = 0
    diff = float('inf')
    
    for a in sorted(array):
        cur = abs(a - n)
        if cur < diff:
            diff = cur
            answer = a
    
    return answer