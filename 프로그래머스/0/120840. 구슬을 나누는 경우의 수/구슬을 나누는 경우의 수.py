import math

def solution(balls, share):
    fact_b = math.factorial(balls)
    fact_s = math.factorial(share)
    return fact_b // (fact_s * math.factorial(balls - share))