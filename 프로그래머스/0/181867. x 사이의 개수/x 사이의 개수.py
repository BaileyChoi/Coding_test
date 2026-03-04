def solution(myString):
    answer = []
    
    x = 0
    for i, c in enumerate(myString):
        if c == 'x':
            answer.append(i - x)
            x = i + 1
    
    return answer + [len(myString) - x]