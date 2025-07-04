def rob(m):
    s = c = 0 
    for n in m:
        s,c = c, max(c, s+n)
    return c
def solution(money):
    return max(rob(money[1:]), rob(money[:-1]))