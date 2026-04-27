def solution(code):
    ret = ''
    mode = -1
    
    for i, c in enumerate(code):
        if c == '1':
            mode *= -1
            continue
            
        if mode == -1:
            if i % 2 == 0:
                ret += c
        else:
            if i % 2 == 1:
                ret += c
                
    return ret if ret else "EMPTY"