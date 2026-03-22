def solution(myString, pat):
    answer = 0
    
    for i in range(len(pat), len(myString) + 1):
        s = myString[:i]
        if s[-len(pat):] == pat:
            answer += 1
    
    return answer