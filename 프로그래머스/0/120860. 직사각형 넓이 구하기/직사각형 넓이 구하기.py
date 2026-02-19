def solution(dots):
    width = max(d[0] for d in dots) - min(d[0] for d in dots)
    height = max(d[1] for d in dots) - min(d[1] for d in dots)
    
    return width * height