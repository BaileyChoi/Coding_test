def solution(strArr):
    return [word.upper() if i % 2 else word.lower() for i, word in enumerate(strArr)]