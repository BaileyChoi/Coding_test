def solution(n, control):
    controller = { 'w':1, 's':-1, 'd':10, 'a':-10}
    
    for c in control:
        n += controller[c]
        
    return n