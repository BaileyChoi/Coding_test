def solution(board):
    answer = 0
    n = len(board)
    danger =  [[0] * n for _ in range(n)]
    
    dx = [-1, -1, -1, 0, 0, 0, 1, 1, 1]
    dy = [-1, 0, 1, -1, 0, 1, -1, 0, 1]
    
    for i in range(n):
        for j in range(n):
            if board[i][j] == 1:
                for k in range(9):
                    nx = i + dx[k]
                    ny = j + dy[k]
                    
                    if 0 <= nx < n and 0 <= ny < n:
                        danger[nx][ny] = 1
                        
    for i in range(n):
        for j in range(n):                
            if danger[i][j] == 0:
                answer += 1
                
    return answer