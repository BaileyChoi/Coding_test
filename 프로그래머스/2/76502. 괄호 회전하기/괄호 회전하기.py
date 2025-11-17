def is_correct(s):
    new_s = ""
    for c in s:
        if new_s and ((new_s[-1] == "(" and c == ")") or (new_s[-1] == "[" and c == "]") or (new_s[-1] == "{" and c == "}")):
            new_s = new_s[:-1]
        else:
            new_s += c
    
    return True if not new_s else False

def solution(s):
    answer = 0
    
    for _ in range(len(s)):        
        if is_correct(s):
            answer += 1
            
        s = s[1:] + s[0]
    
    return answer 