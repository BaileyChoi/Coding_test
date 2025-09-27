def solution(clothes):
    # 종류별 개수 세기
    type_count = {}
    for name, type in clothes:
        type_count[type] = type_count.get(type, 0) + 1
        
    # 종류마다 경우의 수
    answer = 1
    for count in type_count.values():
        answer *= (count + 1)
        
    return answer - 1
        
        