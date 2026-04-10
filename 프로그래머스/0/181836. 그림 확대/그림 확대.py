def solution(picture, k):
    return [ ''.join(c * k for c in line) for line in picture for _ in range(k) ]