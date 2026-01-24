def isHapsung(num):
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return 1
    return 0

def solution(n):
    return sum(isHapsung(i) for i in range(4, n + 1))