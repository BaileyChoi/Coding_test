def solution(s, n):
    answer = ''
    
    for c in s:
        if c == ' ':
            answer += ' '
        elif c.isupper():
            answer += chr((ord(c) - 65 + n) % 26 + 65)
        else:
            answer += chr((ord(c) - 97 + n) % 26 + 97)
    
    return answer