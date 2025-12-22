def solution(numbers):
    sorted_num = sorted(map(str, numbers), key=lambda x:x * 4, reverse=True)
    answer = ''.join(sorted_num) 
    return '0' if answer[0] == '0' else answer