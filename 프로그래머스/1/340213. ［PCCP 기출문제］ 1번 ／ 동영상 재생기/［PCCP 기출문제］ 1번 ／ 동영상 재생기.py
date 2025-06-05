def solution(video_len, pos, op_start, op_end, commands):
    def to_sec(t):  # "mm:ss" → 전체 초로
        m, s = map(int, t.split(":"))
        return m * 60 + s

    def to_mmss(sec):  # 전체 초 → "mm:ss"
        m, s = divmod(sec, 60)
        return f"{m:02}:{s:02}"

    # 입력된 시간들을 초로 변환
    pos = to_sec(pos)
    video_len = to_sec(video_len)
    op_start = to_sec(op_start)
    op_end = to_sec(op_end)
    
    for command in commands:
        # if 오프닝 범위에 있는 경우
        if op_start <= pos <= op_end:
            pos = op_end
        
        # 명령 처리
        if command == "prev":
            pos -= 10
        else:
            pos += 10
            
        # if 경계 위치에 있는 경우
        if pos < 0:
            pos = 0
        elif pos > video_len:
            pos = video_len
            
        # if 오프닝 범위에 있는 경우
        if op_start <= pos <= op_end:
            pos = op_end
    
    return to_mmss(pos)