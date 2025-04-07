import itertools

def isPrime(x):
    if x <= 1 :
        return False
    for i in range(2,x):
        if x % i == 0:
            return False
    return True


def solution(numbers):
    ## 순열 만들기
    nums = set()
    for i in range(1, len(numbers)+1):
        for n in itertools.permutations(numbers, i):
            num = int(''.join(n))
            nums.add(num)
    
    answer = 0
    for n in nums:
        if isPrime(n) == True:
            answer += 1
    
    
    return answer