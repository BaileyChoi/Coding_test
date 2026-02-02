def solution(n):    
    answer = []
    d = 2
    
    while d * d <= n:
        if n % d == 0:
            answer.append(d)
            while n % d == 0:
                n //= d
        d += 1
    
    if n > 1:
        answer.append(n)
        
    return answer