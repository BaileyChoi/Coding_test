def solution(num_list):
    hol, zak = 0, 0
    
    for i, n in enumerate(num_list):
        if i % 2:
            hol += n
        else:
            zak += n
    
    return max(hol, zak)