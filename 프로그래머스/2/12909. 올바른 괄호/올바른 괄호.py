def solution(s):
    answer = []
    
    for c in s:
        if c == '(':
            answer.append("(")
        else:
            if len(answer) == 0:
                return False
            if answer[-1] == "(":
                answer.pop()

    return True if len(answer) == 0 else False