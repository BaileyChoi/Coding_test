def solution(number, k):
    answer = [int(number[0])]
    number = number[1:]
    
    for n in number:
        n = int(n)
        
        # 계속 pop하면서 큰 숫자를 앞으로 당겨줌
        while answer and n > answer[-1] and k > 0:
            answer.pop()
            k -= 1
        
        # pop이 끝나면 answer에 추가
        answer.append(n)
            
    if k > 0:
        answer = answer[:-k]
    
    return ''.join(map(str, answer))