def solution(arr):
    rlen, clen = len(arr), len(arr[0])
    
    if rlen < clen:
        for i in range(clen - rlen):
            arr.append([0] * clen)
    else:
        for a in arr:
            for i in range(rlen - clen):
                a.append(0)
    
    return arr