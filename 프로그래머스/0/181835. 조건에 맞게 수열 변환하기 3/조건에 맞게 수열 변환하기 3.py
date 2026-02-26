def solution(arr, k):
    return [a * k if k % 2 != 0 else a + k for a in arr]