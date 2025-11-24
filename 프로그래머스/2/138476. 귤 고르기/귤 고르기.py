def solution(k, tangerine):
    dictt = {}
    
    for i in range(len(tangerine)):
        dictt[tangerine[i]] = dictt.get(tangerine[i], 0) + 1
    sorted_values = sorted(list(dictt.values()), reverse=True)

    for idx, val in enumerate(sorted_values):
        k -= val
        if k <= 0:
            return idx + 1