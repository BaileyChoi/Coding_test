from itertools import combinations

def solution(relation):
    candidate_keys = []
    
    row_len = len(relation)
    col_len = len(relation[0])

    for length in range(1, col_len + 1):
        for cols in combinations(range(col_len), length):
            minimality = True
            row_set = set()

            # 최소성 체크
            for key in candidate_keys:
                if set(key).issubset(set(cols)):
                    minimality = False
                    break
            if not minimality:
                continue
                
            # 유일성 체크
            for r in range(row_len):
                row_str = ""
                for c in cols:
                    row_str += relation[r][c]
                row_set.add(row_str)
            
            if len(row_set) == row_len:
                candidate_keys.append(cols)
    
    return len(candidate_keys)