from itertools import combinations
import copy

# 백준 입력값 처리
N, M = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(N)]

def solution(N, M, board):
    answer = 0

    # 빈 칸과 바이러스 위치 저장
    empty = []
    viruses = []
    for i in range(N):
        for j in range(M):
            if board[i][j] == 0:
                empty.append([i, j])
            elif board[i][j] == 2:
                viruses.append([i, j])

    # 임의의 3개 빈 칸 선택
    for spaces in combinations(empty, 3):
        temp_board = copy.deepcopy(board)
        # 선택한 3개의 빈 칸에 벽을 세움
        for r, c in spaces:
            temp_board[r][c] = 1

        # 바이러스 위치를 시작으로 BFS/DFS 알고리즘 수행
        dir = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        def dfs(r, c):

            for dr, dc in dir:
                nr, nc = r + dr, c + dc

                if 0 <= nr < N and 0 <= nc < M and temp_board[nr][nc] == 0:
                    temp_board[nr][nc] = 2
                    dfs(nr, nc)
        
        for r, c in viruses:
            dfs(r, c)

        # 안전영역의 최대 넓이 갱신
        safe = 0
        for i in range(N):
            for j in range(M):
                if temp_board[i][j] == 0:
                    safe += 1

        answer = max(answer, safe)

        # 세웠던 3개의 벽을 다시 빈 칸으로 되돌림
        for r, c in spaces:
            temp_board[r][c] = 0

    return answer


print(solution(N, M, board))
