from collections import deque

def solution(queue1, queue2):
    target = (sum(queue1) + sum(queue2)) // 2
    
    q1 = deque(queue1)
    q2 = deque(queue2)
    
    q1_sum = sum(q1)
    q2_sum = sum(q2)
    
    for i in range(4 * len(queue1)):
        # 두 큐 합이 같을 경우 정답 반환
        if q1_sum == q2_sum:
            return i
        # q1의 합이 더 클 경우
        elif q1_sum > q2_sum:
            val = q1.popleft()
            q2.append(val)
            q1_sum -= val
            q2_sum += val
        # q2의 합이 더 클 경우
        else:
            val = q2.popleft()
            q1.append(val)
            q2_sum -= val
            q1_sum += val
    
    return -1