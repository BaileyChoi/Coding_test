def to_sec(hms):
    h, m, s = map(int, hms.split(":"))
    return h * 3600 + m * 60 + s

def to_hms(sec):
    h = sec // 3600
    sec %= 3600
    m = sec // 60
    s = sec % 60
    return f"{h:02d}:{m:02d}:{s:02d}"
    
def solution(play_time, adv_time, logs):
    play = to_sec(play_time)
    adv = to_sec(adv_time)

    diff = [0] * (play + 2)
    for log in logs:
        start_str, end_str = log.split("-")
        start, end = to_sec(start_str), to_sec(end_str)
        diff[start] += 1
        diff[end] -= 1
        
    prefix = [0] * (play + 2)
    cur = 0
    for t in range(play):
        cur += diff[t]
        prefix[t + 1] = prefix[t] + cur
        
    best = 0
    best_sum = prefix[adv] - prefix[0]
    for start in range(1, play - adv + 1):
        cur_sum = prefix[start + adv] - prefix[start]
        if cur_sum > best_sum:
            best_sum = cur_sum
            best = start
            
    return to_hms(best)