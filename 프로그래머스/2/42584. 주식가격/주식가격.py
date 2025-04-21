def solution(prices):
    answer = [0] * len(prices)
    
    stack = []
    
    for i in range(len(prices)):
        # 가격이 떨어진 시점이면 스택에 쌓인 것 처리
        while stack and prices[i] < prices[stack[-1]]:
            top = stack.pop()
            answer[top] = i - top
        stack.append(i)
    
    # 아직 떨어지지 않은 것들은 끝까지 유지된 것
    while stack:
        top = stack.pop()
        answer[top] = len(prices) - 1 - top
    
    return answer