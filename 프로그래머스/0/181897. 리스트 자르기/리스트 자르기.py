def solution(n, slicer, num_list):
    a, b, c = slicer

    return [num_list[:b+1], num_list[a:], num_list[a:b+1], num_list[a:b+1:c]][n-1]