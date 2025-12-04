import heapq

def solution(operations):
    heap = []
    
    for operation in operations:
        do, num = operation.split(" ")
        
        if do == 'I':
            heapq.heappush(heap, int(num))
        elif do == 'D' and heap:
            if num == "1":
                heap.remove(max(heap))
                heapq.heapify(heap)
            else:
                heapq.heappop(heap)
    
    if heap:
        return [max(heap), min(heap)]
    else:
        return [0, 0]
    
    
    return answer