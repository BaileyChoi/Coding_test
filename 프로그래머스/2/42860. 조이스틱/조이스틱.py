def solution(name):
    n = len(name)

    # 문자 변경
    moves = 0
    for char in name:
        moves += min(ord(char) - ord('A'), ord('Z') - ord(char) + 1)
    
    # 커서 이동
    min_move = n - 1
    for i in range(n):
        next_idx = i + 1
        # 연속된 A 구간 건너뛰기
        while next_idx < n and name[next_idx] == 'A':
            next_idx += 1
        # 좌우 이동 최솟값 갱신
        move = i + n - next_idx + min(i, n - next_idx)
        min_move = min(min_move, move)
    
    return moves + min_move