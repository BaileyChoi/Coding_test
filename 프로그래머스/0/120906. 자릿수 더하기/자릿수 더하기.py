def solution(n):
    answer = 0
    result = str(n)

    for n in result:
        answer += int(n)
    
    return answer