import math

def solution(nums):
    answer = 0
    n = len(nums)

    def isPrime(num):
        for i in range(2, num):
            if num % i == 0:
                return False
        return True

    for i in range(0, n):
        for j in range(i + 1, n):
            for k in range(j + 1, n):
                if isPrime(nums[i] + nums[j] + nums[k]):
                    answer += 1

    return answer

# 테스트
print(solution([1,2,3,4]))
print(solution([1,2,7,6,4]))