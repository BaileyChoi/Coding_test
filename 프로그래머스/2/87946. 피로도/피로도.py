from itertools import permutations

def solution(k, dungeons):
    answer = 0
    explores = permutations(dungeons, len(dungeons))
    
    for explore in explores:
        exhaust = k
        success = 0
        for need, consume in explore:
            if exhaust < need:
                continue
            exhaust -= consume
            if exhaust >= 0:
                success += 1
                
        answer = max(answer, success)
    
    return answer