from itertools import combinations

def solution(relation):
    candidates = []
    
    row_len = len(relation)
    col_len = len(relation[0])
    
    # for 모든 컬럼 조합 검사
    nums = [i for i in range(col_len)]
    for i in range(col_len):
        # for 조합
        for comb in combinations(nums, i + 1):
            # for 유일성 체크
            projected_rows = set()
            for row in relation:
                projected_row = tuple(row[j] for j in comb)
                projected_rows.add(projected_row)
            # if 만족성 
            if len(projected_rows) == row_len:
                is_minimal = True
            
                # for 최소성 체크
                for cand in candidates:
                    if set(cand).issubset(set(comb)):
                        is_minimal = False
                        break
                        
                # if 만족 append
                if is_minimal:
                    candidates.append(comb)
                    
    return len(candidates)