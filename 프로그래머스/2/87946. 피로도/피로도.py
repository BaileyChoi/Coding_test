from itertools import permutations

def solution(k, dungeons):
    answer = 0
    
    for p in permutations(dungeons, len(dungeons)):
        exhaust, succeed = k, 0
        for need, cost in p:
            if exhaust < need:
                break
            else:
                exhaust -= cost
                succeed += 1
        answer = max(answer, succeed)
    
    return answer