def solution(binomial):    
    a, b, c = binomial.split(' ')
    
    if b == '+':
        return int(a) + int(c)
    elif b == '-':
        return int(a) - int(c)
    else:
        return int(a) * int(c)