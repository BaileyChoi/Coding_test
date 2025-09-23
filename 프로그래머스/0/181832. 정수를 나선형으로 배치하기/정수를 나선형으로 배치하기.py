def solution(n):
    answer = [[0] * n for _ in range(n)]
    
    dr = [0, 1, 0, -1]
    dc = [1, 0, -1, 0]
    
    answer[0][0] = 1
    r, c = 0, 0
    d = 0
    
    for val in range(2, n * n + 1):
        nr, nc = r + dr[d], c + dc[d]
        
        # 막힘 검사
        if nr < 0 or nr >= n or nc < 0 or nc >= n or answer[nr][nc] != 0:
            d = (d + 1) % 4 
            nr, nc = r + dr[d], c + dc[d]
        
        r, c = nr, nc
        answer[r][c] = val
    
    return answer