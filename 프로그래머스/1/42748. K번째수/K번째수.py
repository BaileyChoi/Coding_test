def solution(array, commands):
    answer = []
    
    for start, end, order in commands:
        answer.append(sorted(array[start - 1:end])[order - 1])
        
    return answer