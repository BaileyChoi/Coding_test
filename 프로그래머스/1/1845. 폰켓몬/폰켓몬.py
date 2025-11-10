def solution(nums):
    n = len(nums) // 2
    pocket_set = set(nums)
    
    return len(pocket_set) if len(pocket_set) <= n else n