def solution(sequence, k):
    answer = []
    
    left, right = 0, 0
    n = len(sequence)
    hap = sequence[0]
    
    best_len = float('inf')
    best = [0, 0]
    
    while left < n and right < n:
        if hap < k:
            right += 1
            if right < n:
                hap += sequence[right]
        elif hap > k:
            hap -= sequence[left]
            left += 1
        else:
            cur_len = right - left
            if cur_len < best_len:
                best_len = cur_len
                best = [left, right]
            
            right += 1
            if right < n:
                hap += sequence[right]
    
    return best
            
    