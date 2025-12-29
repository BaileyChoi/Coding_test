def solution(n, m, section):
    answer = 0
    now = 0
    
    for s in section:
        if now <= s:
            answer += 1
            now = s + m
    
    return answer