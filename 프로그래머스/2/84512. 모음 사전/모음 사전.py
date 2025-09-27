def solution(word):
    answer = 0
    order = {'A': 0, 'E': 1, 'I': 2, 'O': 3, 'U': 4}
    weights = [781, 156, 31, 6, 1] 
    
    for i, ch in enumerate(word):
        answer += weights[i] * order[ch] + 1
        
    return answer