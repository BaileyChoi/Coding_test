def solution(keyinput, board):
    answer = [0, 0]
    direction = {"left": [-1, 0], "right": [1, 0], "up": [0, 1], "down": [0, -1]}
    
    max_x = board[0] // 2
    max_y = board[1] // 2
    
    for key in keyinput:
        nxt_x = answer[0] + direction[key][0]
        nxt_y = answer[1] + direction[key][1]
        
        answer[0] = max(-max_x, min(max_x, nxt_x))
        answer[1] = max(-max_y, min(max_y, nxt_y))
    
    return answer