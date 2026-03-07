def solution(strArr):
    answer = []
    
    for i, word in enumerate(strArr):
        if i % 2:
            answer.append(word.upper())
        else:
            answer.append(word.lower())
        
    return answer