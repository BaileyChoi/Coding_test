def solution(arr, queries):
    def switch(i, j):
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    
    for i, j in queries:
        switch(i, j)
    
    return arr