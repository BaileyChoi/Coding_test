# def factorial(k):
#     if k == 1:
#         return 1
#     return k * factorial(k - 1)
    
# def solution(n):
#     answer = 1
    
#     while factorial(answer) <= n :
#         answer += 1   

#     return answer - 1

def solution(n):
    answer, fact = 1, 1
    
    while fact * (answer + 1) <= n:
        answer += 1
        fact *= answer
    
    return answer
        
    
    
        