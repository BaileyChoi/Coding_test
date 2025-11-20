def solution(s):
    answer = s[0].upper()
    
    i, k = 1, 1
    while k < len(s):
        if s[k - 1] == ' ' and s[k] != ' ':
            converted = s[i: k].lower() + s[k].upper() 
            answer += converted
            i = k + 1 
        k += 1
    
    answer += s[i:].lower()
    
    return answer