def solution(arr1, arr2):
    n1, n2 = len(arr1), len(arr2)
    if n1 > n2:
        return 1
    elif n1 == n2:
        s1, s2 = sum(arr1), sum(arr2)
        if s1 > s2:
            return 1
        elif s1 == s2:
            return 0
        else:
            return -1
    else:
        return -1