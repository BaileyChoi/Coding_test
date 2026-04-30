def solution(quiz):
    answer = []
    
    for q in quiz:
        calc, res = q.split(" = ")
    
        if eval(calc) == int(res):
            answer += 'O'
        else:
            answer += 'X'
    
    return answer