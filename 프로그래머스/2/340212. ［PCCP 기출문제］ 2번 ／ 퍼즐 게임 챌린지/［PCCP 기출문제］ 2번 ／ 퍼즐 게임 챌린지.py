def solution(diffs, times, limit):
    answer = 0
    
    def canSolve(level):
        spent = times[0]
        for i in range(1, len(diffs)):
            if diffs[i] <= level:
                spent += times[i]
            else:
                spent += (times[i - 1] + times[i]) * (diffs[i] - level) + times[i]
            
            if spent > limit:
                return False
        
        return True
    
    low = 1
    high = max(diffs)
    
    while low <= high:
        mid = (low + high) // 2
        if canSolve(mid):
            answer = mid
            high = mid - 1
        else:
            low = mid + 1
    
    return answer