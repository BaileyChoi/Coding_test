def solution(s, n):
    answer = ''
    
    for c in s:
        if c == ' ':
            answer += ' '
        elif c.isupper():
            char_num = ord('A') + (ord(c) - ord('A') + n) % 26 
            answer += chr(char_num)
        else:
            char_num = ord('a') + (ord(c) - ord('a') + n) % 26 
            answer += chr(char_num)
    
    return answer