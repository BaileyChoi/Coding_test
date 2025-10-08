def solution(price, money, count):
    need = sum(price * i for i in range(1, count + 1))

    return max(0, need - money)