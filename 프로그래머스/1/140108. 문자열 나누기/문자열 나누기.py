def solution(s):
    answer = 0
    
    cur = 0
    x = s[0]
    count_x, diff = 1, 0
    while (cur < len(s) - 1):
        cur += 1
        if (s[cur] == x):
            count_x += 1
        else:
            diff += 1
        if count_x == diff:
            answer += 1
            if cur < len(s) - 1:
                x = s[cur + 1]
                count_x, diff = 0, 0
    
    if count_x != diff:
        answer += 1
    
    return answer