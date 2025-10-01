def solution(answers):
    result = []

    p_1 = [1, 2, 3, 4, 5]
    p_2 = [2, 1, 2, 3, 2, 4, 2, 5]
    p_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    scores = [0, 0, 0]
    
    for idx, answer in enumerate(answers):
        if p_1[idx % 5] == answer:
            scores[0] += 1
        if p_2[idx % 8] == answer:
            scores[1] += 1
        if p_3[idx % 10] == answer:
            scores[2] += 1
    
    max_score = max(scores)
    
    for idx, score in enumerate(scores):
        if score == max_score:
            result.append(idx + 1)
        
    return result