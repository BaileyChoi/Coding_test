def attack(num):
    count = 0
    
    for i in range(1, int(num ** 0.5) + 1):
        if num % i == 0:
            if i * i == num:
                count += 1
            else:
                count += 2
    
    return count

def solution(number, limit, power):
    answer = 0
    
    for i in range(1, number + 1):
        attackk = attack(i)
        if attackk <= limit:
            answer += attackk
        else:
            answer += power
    
    return answer