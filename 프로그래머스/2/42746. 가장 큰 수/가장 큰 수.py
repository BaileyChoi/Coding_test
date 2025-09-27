def solution(numbers):
    nums = list(map(str, numbers))
    nums.sort(key=lambda x: x * 4, reverse=True)
    
    return '0' if nums[0] == '0' else ''.join(nums)