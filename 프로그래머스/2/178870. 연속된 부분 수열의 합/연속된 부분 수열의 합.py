def solution(sequence, k):
    answer = []
    
    start, end = 0, 0
    n = len(sequence)
    cur_sum = 0
    min_len = n
        
    while start < n:
        # if 합 < k:
        if cur_sum < k:
            if end == n:
                break
            cur_sum += sequence[end]
            end += 1    
        # elif 합 > k:
        elif cur_sum > k:
            cur_sum -= sequence[start]
            start += 1
        # else: 합 == k 조건 만족
        else:
            # 현재 구간 길이 체크
            cur_len = end - 1 - start
            # 최적 결과 갱신
            if cur_len < min_len or (cur_len == min_len and start < answer[0]):
                min_len = cur_len
                answer = [start, end - 1]
                    
            # start 이동
            cur_sum -= sequence[start]
            start += 1
    
    return answer