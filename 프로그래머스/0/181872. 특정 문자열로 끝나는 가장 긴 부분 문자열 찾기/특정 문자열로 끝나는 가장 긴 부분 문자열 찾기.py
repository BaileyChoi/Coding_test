def solution(myString, pat):
    answer = ''
    
    for i in range(len(pat), len(myString) + 1):
        s = myString[:i]
        check = s[-len(pat):]
        
        if check == pat:
            answer = s
    
    return answer