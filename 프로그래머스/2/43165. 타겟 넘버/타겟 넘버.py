def solution(numbers, target):
    
    def dfs(i, result):        
        if i == len(numbers):
            if result == target:
                return 1
            return 0
        
        return dfs(i + 1, result + numbers[i]) + dfs(i + 1, result - numbers[i])
        
    return dfs(0, 0) 