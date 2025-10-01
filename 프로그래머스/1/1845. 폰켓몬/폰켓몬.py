def solution(nums):
    
    n = len(nums)
    poketmons = set(nums)
    
    return min(len(poketmons), n // 2)
    
    
