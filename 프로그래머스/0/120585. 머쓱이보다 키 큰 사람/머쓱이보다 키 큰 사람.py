def solution(array, height):
    answer = 0
    array.sort(reverse=True)
    
    for i, val in enumerate(array):
        if val > height:
            answer += 1
        else:
            break
        
    return answer