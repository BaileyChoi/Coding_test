def solution(n):
    answers = []
    
    def isValid(queen_positions, row, col):
        # 기존 퀸들과 같은 열 또는 대각선 상에 있는지 확인
        for r, c in enumerate(queen_positions):                                             
            if c == col or abs(c - col) == abs(r - row):    # 같은 열 또는 대각선
                return False
        return True
    
    def backTrack(queen_positions):
        # 종료 조건: 모든 퀸들을 배치한 경우
        if len(queen_positions) == n:
            answers.append(queen_positions[:])
            return
        
        for col in range(n):    # 현재 행에서 모든 열을 탐색
            if isValid(queen_positions, len(queen_positions), col):
                queen_positions.append(col) # 선택
                backTrack(queen_positions)  # 다음 행으로 이동
                queen_positions.pop()       # 선택 취소 (백트래킹)
    
    backTrack([])   # 초기 상태: 퀸을 아무 곳에도 두지 않음
    
    # print(answers)
    return len(answers)
            