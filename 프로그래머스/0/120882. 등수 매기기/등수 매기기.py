def solution(score):
    averages = [(a + b) / 2 for a, b in score]
    sorted_avg = sorted(averages, reverse=True)
    
    
    return [sorted_avg.index(avg) + 1 for avg in averages]