from collections import deque

def get_next_pos(pos, board):
    n = len(board)
    
    next_pos = []
    lx, ly, rx, ry = pos[0][0], pos[0][1], pos[1][0], pos[1][1]
    
    # 직선 이동
    for dx, dy in [[0, 1], [0, -1], [1, 0], [-1, 0]]:
        nlx, nly, nrx, nry = lx + dx, ly + dy, rx + dx, ry + dy
        if 0 <= nlx < n and 0 <= nly < n and 0 <= nrx < n and 0 <= nry < n:
            if board[nlx][nly] == 0 and board[nrx][nry] == 0:
                next_pos.append([(nlx, nly), (nrx, nry)])
    
    # 가로로 누운 경우 (세로 회전)
    if lx == rx:
        for i in [1, -1]:
            if 0 <= lx + i < n and 0 <= rx + i < n:
                if board[lx + i][ly] == 0 and board[rx + i][ry] == 0:
                    next_pos.append([(lx, ly), (lx + i, ly)])
                    next_pos.append([(rx, ry), (rx + i, ry)])
                
    # 세로로 누운 경우 (가로 회전)
    if ly == ry:
        for i in [1, -1]:
            if 0 <= ly + i < n and 0 <= ry + i < n:
                if board[lx][ly + i] == 0 and board[rx][ry + i] == 0:
                    next_pos.append([(lx, ly), (lx, ly + i)])
                    next_pos.append([(rx, ry), (rx, ry + i)])
    
    return next_pos

def solution(board):
    n = len(board)

    queue = deque()
    visited = set()
    
    robot_pos = [(0, 0), (0, 1)]
    queue.append((robot_pos, 0))
    visited.add(frozenset(robot_pos))

    while queue:
        cur_pos, curTime = queue.popleft()
        
        if (n - 1, n - 1) in cur_pos:
            return curTime

        for next_pos in get_next_pos(cur_pos, board):
            if frozenset(next_pos) not in visited:
                queue.append((next_pos, curTime + 1))
                visited.add(frozenset(next_pos))
                    
    return -1