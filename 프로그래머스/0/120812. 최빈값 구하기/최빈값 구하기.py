def solution(array):
    answer = []
    
    dic = {}
    
    for a in array:
        dic[a] = dic.get(a, 0) + 1
        
    max_count = max(dic.values())
    
    for a, c in dic.items():
        if c == max_count:
            answer.append(a)
    
    return answer[0] if len(answer) == 1 else -1