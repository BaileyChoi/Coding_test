def solution(s):
    answer = float('inf')
    n = len(s)
    
    # for: 단어 자르기
    for i in range(1, n + 1):
        compressed = "" # 압축문
        prev_word = s[0:i]
        count = 1
        
        for j in range(i, n, i):
            cur_word = s[j:j+i]
            # if 이전 문자열과 현재 문자열이 같으면:
            if prev_word == cur_word:
                count += 1
            # else: 다르면
            else:
                # if 반복이 없는 경우: 숫자 생략
                if count == 1:
                    compressed += prev_word
                # else: 반복이 있는 경우:
                else:
                    compressed += (str(count) + prev_word)
                prev_word = cur_word
                count = 1
        
        # 마지막 잘린 단어 처리
        if count == 1:
            compressed += prev_word
        else:
            compressed += (str(count) + prev_word)
            
        answer = min(answer, len(compressed))     
        
    return answer
        
        