def solution(stones, k):
    left = 1
    right = max(stones)
    answer = 0
    
    while left <= right:
        mid = (left + right) // 2
        if canCross(stones, k, mid):
            answer = mid
            left = mid + 1  # 더 많은 인원 시도
        else:
            right = mid - 1 # 인원수 줄이기
    
    return answer
    
    
def canCross(stones, k, mid):
    count = 0   # 건너뛰는 디딤돌 칸 수
    for s in stones:
        if s - mid < 0:
            count += 1
            if count >= k:
                return False
        else:
            count = 0
            
    return True