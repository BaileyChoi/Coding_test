def solution(tickets):
    tickets.sort()
    used = [False] * len(tickets)
    answer = ["ICN"]
                
    def dfs(now):
        if len(answer) == len(tickets) + 1:
            return True
        
        for i, (start, end) in enumerate(tickets):
            if start == now and not used[i]:
                used[i] = True
                answer.append(end)
                
                if dfs(end):
                    return True

                used[i] = False
                answer.pop()
            
        return False
                
    dfs("ICN")
    return answer