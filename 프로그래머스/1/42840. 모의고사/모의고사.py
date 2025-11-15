def solution(answers):
    answer = []
    right = [0, 0, 0]
    
    p1 = [1,2,3,4,5]
    p2 = [2,1,2,3,2,4,2,5]
    p3 = [3,3,1,1,2,2,4,4,5,5]
    
    for i, num in enumerate(answers):
        if num == p1[i % 5]:
            right[0] += 1
        if num == p2[i % 8]:
            right[1] += 1
        if num == p3[i % 10]:
            right[2] += 1
    
    max_right = max(right)
    for i, val in enumerate(right):
        if val == max_right:
            answer.append(i + 1)

    return answer
        
    