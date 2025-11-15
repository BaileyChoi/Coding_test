from collections import defaultdict

def solution(clothes):
    answer = 1
    closet = defaultdict(list)
    
    for cloth, cloth_type in clothes:
        closet[cloth_type].append(cloth)
    
    for value in closet.values():
        answer *= (len(value) + 1)
    
    return answer - 1