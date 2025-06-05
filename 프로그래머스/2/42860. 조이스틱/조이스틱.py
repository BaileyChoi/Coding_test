def solution(name):
    # 위/아래 알파벳 조작 최솟값 
    minAlpha = 0
    for char in name:
        minAlpha += min(ord(char) - ord('A'), ord('Z') - ord(char) + 1)
    # 커서 이동 최소 경로
    n = len(name)
    minCursor = n - 1
    for i in range(n):
        # i 이후 연속된 A의 개수 확인
        next_idx = i + 1
        while next_idx < n and name[next_idx] == 'A':
            next_idx += 1
        # 오른쪽으로 i만큼, 다시 왼쪽으로 돌아와서 남은 부분 이동
        move1 = i + i + (n - next_idx)
        # 왼쪽으로 돌아서 갔다가 오른쪽으로 돌아서 i까지
        move2 = (n - next_idx) * 2 + i
        minCursor = min(minCursor, move1, move2)
    
    return minAlpha + minCursor