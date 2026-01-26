def solution(num_list, n):
    answer = []
    
    for i in range(0, len(num_list), n):
        row = num_list[i:i + n]
        answer.append(row)
        
    return answer