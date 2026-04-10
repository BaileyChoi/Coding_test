def solution(picture, k):
    answer = []
    
    for pic in picture:
        line = ""
        for p in pic:
            line += p * k
        for i in range(k):
            answer.append(line)
    
    return answer