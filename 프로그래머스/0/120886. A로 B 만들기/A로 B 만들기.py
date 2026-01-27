from collections import Counter
def solution(before, after):
    return 1 if Counter(after) - Counter(before) == {} else 0 