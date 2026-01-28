from collections import Counter

def solution(s):
    cnt = Counter(s)
    return ''.join(c for c in sorted(cnt) if cnt[c] == 1)