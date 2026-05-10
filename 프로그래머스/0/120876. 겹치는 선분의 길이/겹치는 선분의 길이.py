def solution(lines):
    answer = {}
    
    for start, end in lines:
        for i in range(start, end):
            answer[i] = answer.get(i, 0) + 1
    
    return sum(1 for count in answer.values() if count >= 2)