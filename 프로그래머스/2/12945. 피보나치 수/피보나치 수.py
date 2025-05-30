def solution(n):
    fib = [0] * (n + 1)
    
    fib[0], fib[1] = 0, 1
    
    for i in range(2, n + 1):
        fib[i] = (fib[i - 2] + fib[i - 1]) % 1234567
    
    return fib[n]