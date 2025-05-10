from collections import Counter

def solution(want, number, discount):
    count = 0
    
    # 딕셔너리로 원하는 품목 구성
    want_dict = dict(zip(want, number))
    
    # discount 리스트에서 윈도우 슬라이딩
    for i in range(len(discount) - 9):
        window = discount[i : i + 10]
        if Counter(window) == want_dict:
            count += 1
    
    return count