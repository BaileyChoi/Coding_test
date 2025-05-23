def solution(id_list, report, k):
    # 유저 리스트 재생성 ([id, 메일 수])
    user_list = {id: 0 for id in id_list}
    
    # 신고당한 유저별 신고자 배열 {신고당한 사람: 신고자1, 신고자2..}
    report_list = {id: [] for id in id_list}
    
    # 중복 신고 제거
    report = set(report)
    
    # 신고 처리
    for r in report:
        reporter, reported = r.split(" ")
        report_list[reported].append(reporter)
    
    # 정지된 유저를 신고한 사람에게 메일 발송
    for reported, reporters in report_list.items():
        if len(reporters) >= k:
            for reporter in reporters:
                user_list[reporter] += 1
            
    return list(user_list.values())