def solution(myString, pat):
    return int(pat.replace('A', 'T').replace('B', 'A').replace('T', 'B') in myString)