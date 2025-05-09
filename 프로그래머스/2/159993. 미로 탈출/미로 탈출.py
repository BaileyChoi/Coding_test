from collections import deque

def solution(maps):
    rowLen = len(maps)
    colLen = len(maps[0])
        
    # S, L, E 찾기
    for r in range(rowLen):
        for c in range(colLen):
            if maps[r][c] == 'S': 
                S = [r, c]
            elif maps[r][c] == 'L':
                L = [r, c]
            elif maps[r][c] == 'E':
                E = [r, c]

    # S -> L 거리 구하기
    distSL = bfs(maps, S, L)
    
    # L -> E 거리 구하기
    distLE = bfs(maps, L, E)
    
    return distSL + distLE if distSL != -1 and distLE != -1 else -1

def bfs(maps, start, target):
    rowLen = len(maps)
    colLen = len(maps[0])
    
    visited = [[0] * colLen for _ in range(rowLen)]
    dist = [[0] * colLen for _ in range(rowLen)]
    
    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]
    
    queue = deque()
    
    queue.append(start)
    visited[start[0]][start[1]] = True
    
    while queue: 
        # 현재 노드 방문
        [curRow, curCol] = queue.popleft()
        # 현재 노드가 찾는 지점이라면 거리 반환
        if [curRow, curCol] == target:
            return dist[curRow][curCol]
        
        # 다음 노드 방문
        for i in range(4):
            nextRow = curRow + dr[i]
            nextCol = curCol + dc[i]
            
            if 0 <= nextRow < rowLen and 0 <= nextCol < colLen and maps[nextRow][nextCol] != 'X':
                if not visited[nextRow][nextCol]:
                    queue.append([nextRow, nextCol])
                    visited[nextRow][nextCol] = True
                    dist[nextRow][nextCol] = dist[curRow][curCol] + 1
    
    return -1