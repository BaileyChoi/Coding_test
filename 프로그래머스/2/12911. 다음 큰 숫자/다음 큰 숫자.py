def solution(n):
    answer = n + 1
    count_bin_n = bin(n).count('1')
    
    while True:
        if count_bin_n == bin(answer).count('1'):
            return answer
        answer += 1