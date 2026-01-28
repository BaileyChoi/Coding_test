def solution(s):
    answer = ''
    for c in sorted(set(s)):
        if s.count(c) == 1:
            answer += c
    return answer