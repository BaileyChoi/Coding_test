def solution(arr, divisor):
    answer  = sorted([ e for e in arr if e % divisor == 0])

    return [-1] if len(answer) == 0 else answer 
    