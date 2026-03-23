def solution(arr):
    n = len(arr)
    size = 1
    
    while size < n:
        size *= 2
        
    return arr + [0] * (size - n)