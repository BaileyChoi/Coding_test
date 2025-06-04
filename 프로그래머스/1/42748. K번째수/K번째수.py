def solution(array, commands):
    answer = []
    for command in commands:
        i, j, k = command
        sortedArr = array[i - 1:j]
        sortedArr.sort()
        answer.append(sortedArr[k - 1])
        
    return answer