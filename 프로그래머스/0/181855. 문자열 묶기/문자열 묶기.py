def solution(strArr):
    answer = {}
    
    for s in strArr:
        answer[len(s)] = answer.get(len(s), 0) + 1
        
    return max(answer.values())