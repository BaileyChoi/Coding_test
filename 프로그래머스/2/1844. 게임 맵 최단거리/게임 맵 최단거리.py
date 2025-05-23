from collections import deque

def solution(maps):
    # BFS 최단거리 구하기
    n = len(maps)
    m = len(maps[0])
    queue = deque()
    visited = [[False] * m for _ in range(n)]
    
    
    # 시작점 예약 (0, 0, 거리 1)
    queue.append([0, 0, 1])
    visited[0][0] = True
    
    dr = [0, 0, -1, 1]
    dc = [-1, 1, 0, 0]

    while queue:
        # 현재 노드 방문
        [cur_row, cur_col, dist] = queue.popleft()
        
        # if 도착지 도달하면 return dist
        if cur_row == n - 1 and cur_col == m - 1:
            return dist
    
        # 다음 노드 탐색    
        for i in range(4):
            new_row = cur_row + dr[i]
            new_col = cur_col + dc[i]
            
            if 0 <= new_row < n and 0 <= new_col < m and maps[new_row][new_col] == 1:
                if not visited[new_row][new_col]:
                    queue.append([new_row, new_col, dist + 1])
                    visited[new_row][new_col] = True
                
    return -1