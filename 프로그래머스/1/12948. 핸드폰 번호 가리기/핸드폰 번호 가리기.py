def solution(phone_number):
    answer = ""
    n = len(phone_number)
    
    for i in range(n):
        if i < n - 4:
            answer += '*'
        else:
            answer += phone_number[i]
    
    return answer