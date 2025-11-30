from collections import defaultdict

def solution(record):
    answer = []
    in_out = []
    username = defaultdict(set)
    
    for r in record:
        sr = r.split(" ")
        
        if sr[0] == "Enter":
            in_out.append((sr[1], "님이 들어왔습니다."))
            username[sr[1]] = sr[2]
        elif sr[0] == "Leave":
            in_out.append((sr[1], "님이 나갔습니다."))
        else:
            username[sr[1]] = sr[2]
    
    for uid, did in in_out:
        uname = username[uid]
        answer.append(uname + did)
    
    return answer