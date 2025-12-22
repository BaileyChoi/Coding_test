from collections import deque, defaultdict

def solution(game_board, table):    
    n = len(game_board)
    
    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]
    
    # 연결된 컴포넌트 추출
    def bfs(board, visited, sr, sc, target):
        queue = deque([(sr, sc)])
        visited[sr][sc] = True
        cells = [(sr, sc)]
        
        while queue:
            r, c = queue.popleft()
            for i in range(4):
                nr, nc = r + dr[i], c + dc[i]
                if 0 <= nr < n and 0 <= nc < n:
                    if not visited[nr][nc] and board[nr][nc] == target:
                        visited[nr][nc] = True
                        queue.append((nr, nc))
                        cells.append((nr, nc))
        return cells
    
    # 좌표 정규화
    def normalize(cells):
        min_r = min(r for r, c in cells)
        min_c = min(c for r, c in cells)
        normalized = sorted((r - min_r, c - min_c) for r, c in cells)
        return normalized
    
    # 90도 회전
    def rotate(cells):
        rotated = [(c, -r) for r, c in cells]
        return normalize(rotated)
    
    # 블록의 회전 4가지 중 대표 형태
    def canonical(block):
        forms = []
        cur = block
        for _ in range(4):
            forms.append(cur)
            cur = rotate(cur)
        return min(forms)
    
    # game_board 빈칸 덩어리 추출
    visited = [[False] * n for _ in range(n)]
    blanks = []
    
    for i in range(n):
        for j in range(n):
            if game_board[i][j] == 0 and not visited[i][j]:
                cells = bfs(game_board, visited, i, j, 0)
                blanks.append(canonical(normalize(cells)))
    
    # table 블록 덩어리 추출
    visited = [[False] * n for _ in range(n)]
    blocks = defaultdict(int)
    
    for i in range(n):
        for j in range(n):
            if table[i][j] == 1 and not visited[i][j]:
                cells = bfs(table, visited, i, j, 1)
                norm = normalize(cells)
                key = tuple(canonical(norm))
                blocks[key] += 1
    
    # 빈칸과 블록 매칭
    answer = 0
    
    for blank in blanks:
        key = tuple(blank)
        if blocks[key] > 0:
            blocks[key] -= 1
            answer += len(blank)
    
    return answer