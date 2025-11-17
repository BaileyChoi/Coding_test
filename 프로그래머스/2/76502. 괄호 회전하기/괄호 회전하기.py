def is_correct(s):
    stack = []
    for c in s:
        if stack and ((stack[-1] == "(" and c == ")") or (stack[-1] == "[" and c == "]") or (stack[-1] == "{" and c == "}")):
            stack.pop()
        else:
            stack.append(c)
    
    return True if not stack else False

def solution(s):
    answer = 0
    
    for _ in range(len(s)):        
        if is_correct(s):
            answer += 1
            
        s = s[1:] + s[0]
    
    return answer 