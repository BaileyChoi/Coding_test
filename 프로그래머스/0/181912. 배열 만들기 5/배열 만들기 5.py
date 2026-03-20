def solution(intStrs, k, s, l):
    answer = []
    
    for i in intStrs:
        c = int(i[s:s+l])
        if c > k:
            answer.append(c)
    
    return answer