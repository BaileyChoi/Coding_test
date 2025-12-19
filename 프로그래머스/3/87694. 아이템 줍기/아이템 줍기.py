from collections import deque

def solution(rectangle, characterX, characterY, itemX, itemY):
    # 도형들의 모든 테두리 표시
    graph = [[-1] * 102 for _ in range(102)]
    
    for r in rectangle:
        sx, sy, ex, ey = map(lambda x: x * 2, r)
        for x in range(sx, ex + 1):
            for y in range(sy, ey + 1):
                if sx < x < ex and sy < y < ey:
                    graph[x][y] = 0
                elif graph[x][y] != 0:
                    graph[x][y] = 1
                    
    # bfs로 이동
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    queue = deque()
    dist = [[0] * 102 for _ in range(102)] 

    queue.append([characterX * 2, characterY * 2])
    dist[characterX * 2][characterY * 2] = 1
    
    while queue:
        cx, cy = queue.popleft()
        
        if cx == itemX * 2 and cy == itemY * 2:
            return dist[cx][cy] // 2
        
        for i in range(4):
            nx, ny = cx + dx[i], cy + dy[i]
            
            if graph[nx][ny] == 1 and dist[nx][ny] == 0:
                queue.append([nx, ny])
                dist[nx][ny] = dist[cx][cy] + 1
    
    return 0