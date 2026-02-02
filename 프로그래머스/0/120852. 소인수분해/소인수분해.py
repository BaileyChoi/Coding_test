def solution(n):
    sosu = [True] * (n + 1)
    sosu[0] = sosu[1] = False
    
    for i in range(2, int(n ** 0.5) + 1):
        if sosu[i]:
            for j in range(i * i, n + 1, i):
                sosu[j] = False
                    
    answer = []
    for i in range(2, n + 1):
        if n % i == 0 and sosu[i]:
            answer.append(i)
        
    return answer