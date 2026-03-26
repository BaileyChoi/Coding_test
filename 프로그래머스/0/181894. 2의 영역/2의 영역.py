def solution(arr):
    try:
        stwo = arr.index(2)
    except:
        return [-1]
    
    etwo = len(arr) - arr[::-1].index(2) - 1
    
    return arr[stwo:etwo + 1]