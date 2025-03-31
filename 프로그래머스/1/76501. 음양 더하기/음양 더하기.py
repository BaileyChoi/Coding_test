def solution(absolutes, signs):
    nums = []
    
    for num, sign in zip(absolutes, signs):
        if sign:
            nums.append(num)
        else:
            nums.append(-num)
    
    return sum(nums)