def solution(num_list):
    hol, jak = '', ''
    
    for n in num_list:
        if n % 2 == 1:
            hol += str(n)
        else:
            jak += str(n)  
    return int(hol) + int(jak)