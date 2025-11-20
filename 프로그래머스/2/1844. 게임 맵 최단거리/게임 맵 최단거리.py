from collections import deque

def solution(maps):
    answer = 0
    n, m = len(maps), len(maps[0])
    dr = [0, 0, -1, 1]
    dc = [-1, 1, 0, 0]
    
    queue = deque()
    visited = [[False] * m for _ in range(n)]
    
    queue.append((0, 0))
    
    while queue:
        r, c = queue.popleft()
        
        for i in range(4):
            nr, nc = r + dr[i], c + dc[i]
            if 0 <= nr < n and 0 <= nc < m and maps[nr][nc] == 1:
                if not visited[nr][nc]:
                    maps[nr][nc] = maps[r][c] + 1
                    queue.append((nr, nc))
                    visited[nr][nc] == True
                    
    return maps[n - 1][m - 1] if maps[n - 1][m - 1] != 1 else -1