def solution(n):
    pattern = "수박"
    
    if n % 2 == 0:
        return pattern * (n // 2)
    else:
        return pattern * (n // 2) + "수"
    
