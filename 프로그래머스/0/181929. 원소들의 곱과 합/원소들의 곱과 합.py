def solution(num_list):
    gop, hap = 1, 0
    
    for num in num_list:
        gop *= num
        hap += num
        
    return 1 if gop < hap * hap else 0 