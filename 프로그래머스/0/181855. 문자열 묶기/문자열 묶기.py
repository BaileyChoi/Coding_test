def solution(strArr):
    answer = [0] * 31
    
    for s in strArr:
        answer[len(s)] += 1
        
    return max(answer)