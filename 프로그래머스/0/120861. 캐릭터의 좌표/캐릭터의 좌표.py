def solution(keyinput, board):
    x, y = 0, 0
    move = {"left": (-1, 0), "right": (1, 0), "up": (0, 1), "down": (0, -1)}
    
    max_x, max_y = board[0] // 2, board[1] // 2
    
    for k in keyinput:
        nx, ny = x + move[k][0], y + move[k][1]
        x = max(-max_x, min(max_x, nx))
        y = max(-max_y, min(max_y, ny))
    
    return [x, y]