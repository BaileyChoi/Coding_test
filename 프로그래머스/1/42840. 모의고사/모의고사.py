def solution(answers):
    answer = []
    right = [0, 0, 0]
    
    p1 = [1,2,3,4,5]
    p2 = [2,1,2,3,2,4,2,5]
    p3 = [3,3,1,1,2,2,4,4,5,5]
    
    for i, val in enumerate(answers):
        right[0] += val == p1[i % 5]
        right[1] += val == p2[i % 8]
        right[2] += val == p3[i % 10]
    
    max_right = max(right)
    for i, val in enumerate(right):
        if val == max_right:
            answer.append(i + 1)
    
    return answer