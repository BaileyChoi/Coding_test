def solution(arr):
    answer = 0
    
    while True:
        new_arr = []
        
        for a in arr:
            if a >= 50 and a % 2 == 0:
                new_arr.append(a // 2)
            elif a < 50 and a % 2 == 1:
                new_arr.append(a * 2 + 1)
            else:
                new_arr.append(a)
        
        if new_arr == arr:
            break
        
        arr = new_arr
        answer += 1
    
    return answer