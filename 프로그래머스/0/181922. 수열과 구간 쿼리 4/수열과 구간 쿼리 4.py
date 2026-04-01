def solution(arr, queries):
    for s, e, k in queries:
        for m in range(s, e + 1):
            if m % k != 0:
                continue
            arr[m] += 1
    
    return arr