def divisors_num(num):
    n = 0
    for i in range(1, num + 1):
        if num % i == 0:
            n += 1
            
    return n

def solution(left, right):
    answer = 0
    
    for i in range(left, right + 1):
        if divisors_num(i) % 2 == 0:
            answer += i
        else:
            answer -= i
    
    return answer