def isValid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    
    for char in s:
        if char in list(pairs.values()):
            stack.append(char)
        else:
            if not stack or stack.pop() != pairs[char]:
                return False
            
    return not stack

def solution(s):
    answer = 0
    
    # 회전시키기
    for i in range(len(s)):
        newS = s[i:] + s[:i]
        # 올바른 괄호 문자열인지 확인
        if isValid(newS):
            answer += 1
    
    return answer
    