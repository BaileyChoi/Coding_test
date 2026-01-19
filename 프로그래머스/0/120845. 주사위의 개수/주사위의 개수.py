def solution(box, n):
    answer = 1
    for leng in box:
        answer *= leng // n
    return answer