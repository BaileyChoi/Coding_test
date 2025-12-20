def solution(name, yearning, photo):
    answer = []
    
    score = {}
    
    for i in range(len(name)):
        score[name[i]] = yearning[i]
        
    for p in photo:
        result = 0
        for person in p:
            result += score.get(person, 0)
        answer.append(result)
    
    return answer