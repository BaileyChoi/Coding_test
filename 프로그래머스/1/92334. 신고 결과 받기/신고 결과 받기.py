from collections import defaultdict

def solution(id_list, report, k):
    answer = [0] * len(id_list)
    
    # 신고 처리) 신고당한 사람: [신고자, 신고자, ...]
    report_set = defaultdict(set)
    for r in report:
        reporter, reported = r.split(" ")
        report_set[reported].add(reporter)
        
    # 메일 건수 처리) 신고자: 건수
    mail_set = defaultdict(set)
    for reported, reporter in report_set.items():
        if len(reporter) >= k:
            for r in reporter:
                mail_set[r] = mail_set.get(r, 0) + 1
            
    for reporter, num in mail_set.items():
        i = id_list.index(reporter)
        answer[i] = num 
            
    return answer