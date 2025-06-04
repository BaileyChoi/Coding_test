def solution(arr):
    
    def compress(x, y, n):
        # 모든 값이 같은지 확인
        flag = True
        base = arr[x][y]
        for i in range(x, x + n):
            for j in range(y, y + n):
                if arr[i][j] != base:
                    flag = False
        # if 같으면: 해당 값의 카운트 리턴
        if flag:
            return [1, 0] if base == 0 else [0, 1] 
        # else: 다르면 4분할 후 재귀 호출
        else:
            half = n // 2
            lu0, lu1 = compress(x, y, half)
            ru0, ru1 = compress(x, y + half , half)
            ld0, ld1 = compress(x + half, y, half)
            rd0, rd1 = compress(x + half, y + half, half)
            
            # 각각의 리턴값을 합침
            return [lu0+ru0+ld0+rd0, lu1+ru1+ld1+rd1]
        
    return compress(0, 0, len(arr))