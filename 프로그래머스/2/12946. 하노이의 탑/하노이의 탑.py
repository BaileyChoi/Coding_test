def solution(n):
    answer = []
    
    def hanoi(n, off, to, via):
        if n == 1:
            answer.append([off, to])
        else:
            hanoi(n - 1, off, via, to)
            hanoi(1, off, to, via)
            hanoi(n - 1, via, to, off)
    
    hanoi(n, 1, 3, 2)
    
    return answer