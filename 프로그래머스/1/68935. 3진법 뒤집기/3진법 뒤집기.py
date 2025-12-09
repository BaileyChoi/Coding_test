def math_n(n):
    result = ''
    while n > 0:
        n, m = divmod(n, 3)
        result += str(m)
    return result

def solution(n):
    return int(math_n(n), 3)
    
