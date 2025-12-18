def solution(routes):
    answer = 0
    camera = -10**9
    routes.sort(key=lambda x: x[1])
    
    for start, end in routes:
        if camera < start:
            camera = end
            answer += 1
        
    return answer