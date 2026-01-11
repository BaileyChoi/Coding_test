def solution(id_list, report, k):
    # 신고 처리) 신고당한 사람: [신고자, 신고자, ...]
    report_dict = {name: [] for name in id_list}
    for r in set(report):
        reporter, reported = r.split(" ")
        report_dict[reported].append(reporter)
        
    # 메일 건수 처리
    mail_dict = {name: 0 for name in id_list}
    for reported, reporter in report_dict.items():
        if len(reporter) >= k:
            for r in reporter:
                mail_dict[r] += 1
            
    return list(mail_dict.values())