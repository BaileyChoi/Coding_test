import math 

def solution(progresses, speeds):
    answer = {}
    days = []
    
    for p, s in zip(progresses, speeds):
        days.append(math.ceil((100 - p) / s))
    
    for i in range(1, len(days)):
        if days[i] < days[i - 1]:
            days[i] = days[i - 1]
        
    for day in days:
        answer[day] = answer.get(day, 0) + 1
        
    return list(answer.values())
