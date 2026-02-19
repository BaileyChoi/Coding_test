def solution(score):
    averages = [sum(s) / 2 for s in score]
    sorted_avg = sorted(averages, reverse=True)
    
    rank = {}
    for i, v in enumerate(sorted_avg):
        if v not in rank:
            rank[v] = i + 1
    
    return [rank[v] for v in averages]