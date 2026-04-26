def solution(polynomial):
    x = 0
    a = 0
    
    for p in polynomial.split(" "):
        if p.endswith('x'):
            if p == 'x':
                x += 1                
            else:
                x += int(p[:-1])
        elif p.isdigit():
            a += int(p)
    
    if a == 0:
        return "x" if x == 1 else str(x) + "x"
    if x == 0:
        return str(a)
    if x == 1:
        return 'x + ' + str(a)
    return str(x) + "x + " + str(a)