def solution(s):    
    answer = []
    dictt = {}

    for idx, c in enumerate(s):
        if c not in dictt:
            answer.append(-1)
        else:
            answer.append(idx - dictt[c])
        dictt[c] = idx    
    
    return answer