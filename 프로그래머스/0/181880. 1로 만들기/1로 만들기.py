def solution(num_list):
    answer = 0
    
    for n in num_list:
        count = 0   
        
        while n != 1:
            n //= 2
            count += 1
        
        answer += count
    
    return answer