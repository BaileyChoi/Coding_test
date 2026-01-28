def solution(s):
    cnt = {}
    for c in s:
        cnt[c] = cnt.get(c, 0) + 1
        
    return ''.join(c for c in sorted(cnt) if cnt[c] == 1)