def solution(n, lost, reserve):
    lost_set = set(lost)
    reserve_set = set(reserve)
    
    # 도난+여벌 겹치는 학생은 자기 것만 입음
    overlap = lost_set & reserve_set
    lost_set -= overlap
    reserve_set -= overlap
    
    # 왼쪽 -> 오른쪽 순 그리디로 대여
    for r in sorted(reserve_set):
        if r - 1 in lost_set:
            lost_set.remove(r - 1)
        elif r + 1 in lost_set:
            lost_set.remove(r + 1)
            
    return n - len(lost_set)