import math

def solution(left, right):
    answer = 0
    
    for i in range(left, right + 1):
        r = int(math.sqrt(i))
        if r * r == i:
            answer -= i
        else:
            answer += i
    
    return answer