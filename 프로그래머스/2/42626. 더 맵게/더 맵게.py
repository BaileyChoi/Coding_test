import heapq

def solution(scoville, K):
    answer = 0
    
    heapq.heapify(scoville) 
    
    while len(scoville) > 1:
        if scoville[0] >= K:
            return answer
        
        s1 = heapq.heappop(scoville)
        s2 = heapq.heappop(scoville)
        
        answer += 1
        heapq.heappush(scoville, s1 + s2 * 2)
    
    return answer if scoville[0] >= K else -1