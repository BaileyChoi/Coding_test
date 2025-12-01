from collections import deque

def solution(queue1, queue2):
    answer = 0
    n = len(queue1)
    
    queue1 = deque(queue1)
    queue2 = deque(queue2)
    
    sum1 = sum(queue1)
    sum2 = sum(queue2)
    
    while answer <= n * 4:
        if sum1 > sum2:
            val = queue1.popleft()
            queue2.append(val)
            sum2 += val
            sum1 -= val
        elif sum1 < sum2:
            val = queue2.popleft()
            queue1.append(val)
            sum1 += val
            sum2 -= val
        else:
            return answer
        answer += 1
            
    return -1