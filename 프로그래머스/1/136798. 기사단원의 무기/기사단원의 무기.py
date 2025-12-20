def solution(number, limit, power):
    answer = 0

    # 에라토스테네스의 체
    divisor = [0] * (number + 1)
    
    for i in range(1, number + 1):
        for j in range(i, number + 1, i):
            divisor[j] += 1
    
    # 풀이
    for i in range(1, number + 1):
        if divisor[i] <= limit:
            answer += divisor[i]
        else:
            answer += power
    
    return answer