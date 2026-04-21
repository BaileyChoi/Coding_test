def solution(l, r):
    answer = []
    
    def dfs(num):
        if num > r:
            return
        
        if l <= num <= r:
            answer.append(num)
        
        if num != 0:
            dfs(num * 10)
        dfs(num * 10 + 5)
        
    dfs(0)
    
    return sorted(answer) if answer else [-1]