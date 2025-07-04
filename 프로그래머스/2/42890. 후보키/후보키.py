from itertools import combinations

def solution(relation):
    row = len(relation)
    col = len(relation[0])

    candy_keys = []
    
    for i in range(1, col + 1):
        for comb in combinations(range(col), i):
            temp = [tuple(item[c] for c in comb) for item in relation]
            
            if len(set(temp)) == row:
                is_minimal = True
                   
                for key in candy_keys:
                    if set(key).issubset(set(comb)):
                        is_minimal = False
                        break
                   
                if is_minimal:
                   candy_keys.append(comb)
    
    return len(candy_keys)