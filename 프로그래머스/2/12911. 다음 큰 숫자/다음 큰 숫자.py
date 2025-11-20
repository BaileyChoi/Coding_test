def count_bin(n):
    count = 0
    for c in bin(n)[2:]:
        if c == "1":
            count += 1
    return count

def solution(n):
    answer = n + 1
    count_bin_n = count_bin(n)
    
    while True:
        if count_bin_n == count_bin(answer):
            return answer
        answer += 1