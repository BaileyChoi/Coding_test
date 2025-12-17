def solution(cards1, cards2, goal):
    m, n = 0, 0    
    len1 = len(cards1)
    len2 = len(cards2)
    
    for word in goal:
        if m < len1 and cards1[m] == word:
            m += 1
        elif n < len2 and cards2[n] == word:
            n += 1
        else:
            return "No"
    
    return "Yes"