def solution(a, b, c, d):
    dice = [a, b, c, d]
    counts = {}
    
    for num in dice:
        counts[num] = counts.get(num, 0) + 1
        
    if len(counts) == 1:
        p = a
        return 1111 * p
    
    if len(counts) == 2:
        values = list(counts.items())
        
        if 3 in counts.values():
            for num, count in values:
                if count == 3:
                    p = num
                else:
                    q = num
            return (10 * p + q) ** 2
    
        
        else:
            nums = list(counts.keys())
            p, q = nums[0], nums[1]
            return (p + q) * abs(p - q)
    
    if len(counts) == 3:
        result = 1
        
        for num, count in counts.items():
            if count == 1:
                result *= num
                
        return result
    
    return min(dice)