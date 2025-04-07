import math

def solution(n, m):
    
    gcd = math.gcd(n,m)
    lcm = n * m // math.gcd(n,m)
    
    answer = [gcd, lcm]
    return answer