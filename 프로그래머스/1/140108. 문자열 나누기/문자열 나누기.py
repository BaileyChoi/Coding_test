def solution(s):
    answer = 0
    
    x = ''
    count_x, diff = 0, 0
    
    for c in s:
        if count_x == diff:
            answer += 1
            x = c
            count_x, diff = 1, 0
        else:
            if c == x:
                count_x += 1
            else:
                diff += 1
    
    return answer