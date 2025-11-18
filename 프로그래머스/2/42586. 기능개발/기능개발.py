import math

def solution(progresses, speeds):
    days = []
    for p, s in zip(progresses, speeds):
        days.append(math.ceil((100 - p) / s))
    
    answer = {}
    answer[days[0]] = 1
    for i in range(1, len(days)):
        if days[i] < days[i - 1]:
            days[i] = days[i - 1]
        answer[days[i]] = answer.get(days[i], 0) + 1
            
    return list(answer.values())