def solution(A, B):
    if A == B:
        return 0
    
    for i in range(1, len(A)):
        new = A[-i:] + A[:-i]
        
        if new == B:
            return i
    
    return -1