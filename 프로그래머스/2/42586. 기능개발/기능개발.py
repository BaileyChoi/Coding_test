from collections import deque
import math

def solution(progresses, speeds):
    answer = []
    queue = deque()
    
    for i in range(len(progresses)):
        queue.append(math.ceil((100 - progresses[i]) / speeds[i]))
        
    while queue:
        current = queue.popleft()
        deploy_num = 1
        
        while queue and queue[0] <= current:
            queue.popleft()
            deploy_num += 1
        answer.append(deploy_num)
    
    return answer