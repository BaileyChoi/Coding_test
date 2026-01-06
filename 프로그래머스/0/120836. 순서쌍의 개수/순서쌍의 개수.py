def solution(n):
    divisor = []
    
    for i in range(1, int(n ** 0.5) + 1):
        if n % i == 0:
            divisor.append(i)
            if i ** 2 != n:
                divisor.append(n // i)
    
    return len(divisor)