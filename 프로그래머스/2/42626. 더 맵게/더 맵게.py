import heapq

def solution(scoville, K):
    answer = 0
    
    heap = []
    
    for s in scoville:
        heapq.heappush(heap, s)
                
    while len(heap) > 1:
        if heap[0] >= K:
            return answer
        
        num1 = heapq.heappop(heap)
        num2 = heapq.heappop(heap)
        
        heapq.heappush(heap, num1 + num2 * 2)
        answer += 1

    return answer if heap[0] >= K else -1