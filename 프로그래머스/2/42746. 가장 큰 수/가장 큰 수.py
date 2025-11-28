def solution(numbers):
    numbers.sort(key=lambda s: str(s) * 4, reverse=True)
    
    return ''.join(map(str, numbers)) if numbers[0] != 0 else '0' 