from collections import deque

def solution(maps):
    # BFS로 최단 거리 구하기
    rowLen = len(maps)
    colLen = len(maps[0])
    
    dr = [0, 0, -1, 1]
    dc = [-1, 1, 0, 0]
    
    queue = deque()
    visited = [[False] * colLen for _ in range(rowLen)]
    
    # 시작점 예약 (curR, curC, dist)
    queue.append((0, 0, 1))
    visited.append((0, 0))
    
    while queue:
        # 현재 노드 방문 
        curR, curC, dist = queue.popleft()
        
        # if 도착지 방문:
        if curR == rowLen - 1 and curC == colLen - 1:
            return dist
        
        # 다음 노드 방문
        for i in range(4):
            nextR, nextC = curR + dr[i], curC + dc[i]
            if 0 <= nextR < rowLen and 0 <= nextC < colLen and maps[nextR][nextC] == 1:
                if not visited[nextR][nextC]:
                    visited[nextR][nextC] = True
                    queue.append((nextR, nextC, dist + 1))
                    
    return -1