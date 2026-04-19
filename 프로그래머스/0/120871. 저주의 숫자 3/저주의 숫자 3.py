def solution(n):
    a = 1
    count = 0
    
    while count < n:
        if a % 3 == 0 or '3' in str(a):
            a += 1
            continue
        
        count += 1
        
        if count == n:
            return a
        
        a += 1