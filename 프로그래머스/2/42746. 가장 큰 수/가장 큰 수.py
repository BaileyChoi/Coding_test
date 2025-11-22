def solution(numbers):
    str_numbers = list(map(str, numbers))
    str_numbers = sorted(str_numbers, key=lambda x:x * 4, reverse=True)
    return ''.join(str_numbers) if str_numbers[0] != '0' else '0'