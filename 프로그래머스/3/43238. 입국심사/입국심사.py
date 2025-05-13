def solution(n, times):
    answer = 0

    low = 1
    high = max(times) * n
    
    while low <= high:
        mid = (low + high) // 2
        if canPass(times, mid, n):
            answer = mid
            high = mid - 1
        else:
            low = mid + 1
    
    return answer

def canPass(times, mid, n):
    count = 0
    for t in times:
        count += mid // t
        if count >= n:
            return True
    return False
    
    