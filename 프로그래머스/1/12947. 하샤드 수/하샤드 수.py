def solution(x):
    digits = [int(d) for d in str(x)]
    hap = sum(digits)
    
    if x % hap == 0:
        return True
    else:
        return False