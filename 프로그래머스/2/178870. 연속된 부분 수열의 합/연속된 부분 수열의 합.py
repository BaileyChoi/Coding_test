def solution(sequence, k):
    answer = []
    
    left, right = 0, 0
    n = len(sequence)
    hap = sequence[0]
    
    while left < n and right < n:
        if hap < k:
            right += 1
            if right < n:
                hap += sequence[right]
        elif hap > k:
            hap -= sequence[left]
            left += 1
        else:
            answer.append([left, right])
            right += 1
            if right < n:
                hap += sequence[right]
    
    return sorted(answer, key=lambda x: x[1] - x[0])[0]
            
    