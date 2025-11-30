import heapq

def solution(jobs):
    jobs.sort()
    
    n = len(jobs)
    curTime = 0
    total = 0
    idx = 0
    finished = 0
    heap = []
    
    while finished < n:
        while idx < n and jobs[idx][0] <= curTime:
            s, l = jobs[idx]
            heapq.heappush(heap, (l, s, idx))
            idx += 1
            
        if heap:
            l, s, i = heapq.heappop(heap)
        
            curTime += l
            total += curTime - s
            finished += 1  
        else:
            curTime = jobs[idx][0]
        
    return total // n