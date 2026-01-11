from collections import defaultdict

def solution(id_list, report, k):
    answer = [0] * len(id_list)
    
    # 신고 처리) 신고당한 사람: [신고자, 신고자, ...]
    report_set = defaultdict(set)
    for r in report:
        reporter, reported = r.split(" ")
        report_set[reported].add(reporter)
        
    # 메일 건수 처리
    for reported, reporter in report_set.items():
        if len(reporter) >= k:
            for r in reporter:
                answer[id_list.index(r)] += 1
            
    return answer