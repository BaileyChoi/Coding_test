from collections import deque

def solution(maps):
    lenR = len(maps)
    lenC = len(maps[0])
    
    queue = deque()
    visited = [[False] * lenC for _ in range(lenR)]
    
    queue.append((0, 0, 1))
    visited[0][0] = True
    
    dr = [0, 0, -1, 1]
    dc = [-1, 1, 0, 0]
    
    while queue:
        curR, curC, dist = queue.popleft()
        
        if curR == lenR - 1 and curC == lenC - 1:
            return dist
        
        for i in range(4):
            nextR, nextC = curR + dr[i], curC + dc[i]
            
            if 0<=nextR<lenR and 0<=nextC<lenC and maps[nextR][nextC] == 1:
                if not visited[nextR][nextC]:
                    visited[nextR][nextC] = True
                    queue.append((nextR, nextC, dist + 1))
    
    return -1