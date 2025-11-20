def solution(word):
    answer = 0
    
    letters = ['A', 'E', 'I', 'O', 'U']
    weights = [781, 156, 31, 6, 1] 
    
    for i, c in enumerate(word):
        answer += weights[i] * letters.index(c)+ 1
    
    return answer