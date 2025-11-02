def solution(s):
    answer = []
    
    for c in s:
        if c == '(':
            answer.append("(")
        else:
            if not answer:
                return False
            if answer[-1] == "(":
                answer.pop()

    return not answer