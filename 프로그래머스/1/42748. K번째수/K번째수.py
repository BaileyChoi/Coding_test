def solution(array, commands):
    answer = []
    
    for start, end, order in commands:
        cut_array = array[start-1:end]
        sort_array = sorted(cut_array)
        num = sort_array[order-1]
        answer.append(num)
    return answer