def solution(sizes):
    big_num = []
    small_num = []
    
    for size in sizes:
        big_num.append(max(size))
        small_num.append(min(size))
        
    return max(big_num) * max(small_num)