def solution(n):
    answer = 0
    
    for start in range(1, n // 2 + 1):
        hap = 0
        for i in range(start, n // 2 + 2):
            hap += i
            
            if hap > n:
                break
            if hap == n:
                answer += 1
        
    return answer + 1