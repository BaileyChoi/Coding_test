def solution(participant, completion):
    dict = {}
    
    for p in participant:
        dict[p] = dict.get(p, 0) + 1
    
    for c in completion:
        dict[c] -= 1
        
    for key, value in dict.items():
        if value == 1:
            return key