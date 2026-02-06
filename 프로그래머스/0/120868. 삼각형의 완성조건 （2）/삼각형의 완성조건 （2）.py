def solution(sides):
    answer = 0
    a, b = max(sides), min(sides)
    
    answer += b
    answer += b - 1
    
    return answer