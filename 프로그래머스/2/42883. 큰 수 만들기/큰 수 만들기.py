def solution(number, k):
    answer = []
    
    for n in number:
        # 계속 pop하면서 큰 숫자를 앞으로 당겨줌
        while answer and answer[-1] < n and k > 0:
            answer.pop()
            k -= 1
        
        # pop이 끝나면 answer에 추가
        answer.append(n)
            
    if k > 0:
        answer = answer[:-k]
    
    return ''.join(answer)