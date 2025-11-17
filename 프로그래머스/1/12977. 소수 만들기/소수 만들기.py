from itertools import combinations

def is_prime(num):
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def solution(nums):
    answer = 0
    
    for n in combinations(nums, 3):
        answer += is_prime(sum(n))

    return answer