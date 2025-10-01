def solution(nums):
    
    n = len(nums)
    
    poketmons = set()
    
    for num in nums:
        poketmons.add(num)
    
    return len(poketmons) if len(poketmons) < n / 2 else n / 2
    
    
