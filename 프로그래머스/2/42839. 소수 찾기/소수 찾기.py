from itertools import permutations

def is_prime(num):
        if num == 0 or num == 1:
            return False
        
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        
        return True
    
def solution(numbers):
    answer = 0
    num_set = set()
    
    for i in range(1, len(numbers) + 1):
        for num in permutations(numbers, i):
            num_set.add(int(''.join(num)))
        
    for num in num_set:
        if is_prime(num):
            answer += 1
        
    return answer