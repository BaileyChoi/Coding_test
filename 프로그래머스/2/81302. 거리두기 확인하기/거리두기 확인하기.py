from collections import deque

def solution(places):
    answer = []
    
    # 대기실에서 'P'를 만나면 bfs 실행하여 거리두기 위반 여부 체크 
    for room in places:
        isValid = 1
        for r in range(5):
            for c in range(5):
                if room[r][c] == 'P':
                    if bfs(room, [r, c]) == 0:
                        isValid = 0
                        break
            if isValid == 0:
                break
        
        answer.append(isValid)
        
    return answer

def bfs(room, start):
    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]
    
    visited = [[False] * 5 for _ in range(5)]
    dist = [[0] * 5 for _ in range(5)]
    
    queue = deque()
    
    queue.append(start)
    visited[start[0]][start[1]] = True
    
    while queue:
        # 현재 노드 방문
        [curRow, curCol] = queue.popleft()
        
        # 시작 지점이 아닌데 'P'를 만났고, 거리가 2 이하라면 위반
        if dist[curRow][curCol] != 0 and room[curRow][curCol] == 'P' and dist[curRow][curCol] <= 2:
            return 0
        
        # 거리 2 초과면 더 탐색할 필요X
        if dist[curRow][curCol] >= 2:
            continue
        
        # 다음 노드 방문
        for i in range(4):
            nextRow = curRow + dr[i]
            nextCol = curCol + dc[i]
            
            if 0 <= nextRow < 5 and 0 <= nextCol < 5 and room[nextRow][nextCol] != 'X':
                if not visited[nextRow][nextCol]:
                    queue.append([nextRow, nextCol])
                    visited[nextRow][nextCol] = True
                    dist[nextRow][nextCol] = dist[curRow][curCol] + 1
    
    return 1