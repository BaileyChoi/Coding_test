def solution(polynomial):
    x, a = 0, 0
    
    for p in polynomial.split():
        if p.endswith('x'):
            x += int(p[:-1] or 1)
        elif p.isdigit():
            a += int(p)
      
    if x == 0:
        return str(a)
    
    x_part = 'x' if x == 1 else f'{x}x'
    return x_part if a == 0 else f'{x_part} + {a}'