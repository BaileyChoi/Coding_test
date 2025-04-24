def solution(s):
    
    answer = 10**9
    
    if len(s) == 1:
        return 1
    
    for i in range(1, len(s) // 2 + 1):
        compressed = "" # 압축문
        prev = s[0:i]
        count = 1
        
        for j in range(i, len(s), i):
            current = s[j:j + i]
            if prev == current:
                count += 1
            else:
                if count > 1:   
                    compressed += (str(count) + prev)
                else:   # 반복이 1이면 숫자 생략
                    compressed += prev
                prev = current
                count = 1
        
        # 마지막 묶음 처리
        compressed += (str(count) + prev) if count > 1 else prev
        answer = min(answer, len(compressed))
        
    return answer
        