import heapq

def solution(scoville, K):
    heap = []
    
    for s in scoville :
        heapq.heappush(heap, s)
    # heapq.heapify(scoville)
    
    answer = 0
    quotient = 0
    
    while heap[0] < K :

        if len(heap) < 2 :
            return -1
        
        min1 = heapq.heappop(heap)
        min2 = heapq.heappop(heap)
    
        quotient = min1 + (2 * min2)
        heapq.heappush(heap, quotient)
        answer += 1
    
    return answer
