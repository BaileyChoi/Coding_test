def solution(distance, rocks, n):
    rocks.sort()
    
    left, right = 0, distance
    best = 0
    
    while left <= right:
        mid = (left + right) // 2
        removed = 0
        prev = 0
        
        for rock in rocks:
            if rock - prev < mid:
                removed += 1
            else:
                prev = rock
                
        if distance - prev < mid:
            removed += 1
        
        if removed <= n:
            best = mid
            left = mid + 1
        else:
            right = mid - 1
    
    return best