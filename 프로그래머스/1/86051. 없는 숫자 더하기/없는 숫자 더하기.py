def solution(numbers):
    total = 0
    
    for num in range(10):
        if num not in numbers:
            total += num
            
    return total