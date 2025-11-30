def solution(record):
    answer = []
    username = {}
    
    for r in record:
        sr = r.split(" ")
        
        if sr[0] in ["Enter", "Change"]:
            username[sr[1]] = sr[2]
    
    for r in record:
        sr = r.split(" ")
        
        if sr[0] == "Enter":
            answer.append(username[sr[1]] + "님이 들어왔습니다.")
        elif sr[0] == "Leave":
            answer.append(username[sr[1]] + "님이 나갔습니다.")
            
    return answer