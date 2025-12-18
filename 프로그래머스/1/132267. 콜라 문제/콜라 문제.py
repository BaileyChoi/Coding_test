def solution(a, b, n):
    answer = 0
    
    while n >= a:
        k = n // a
        n = n - k * a + k * b
        answer += k * b
    
    return answer