import heapq

INF = 10**15

def solution(n, paths, gates, summits):
    # 그래프 구성
    graph = [[] for _ in range(n + 1)]
    for a, b, w in paths:
        graph[a].append((b, w))        
        graph[b].append((a, w))
        
    gate_set = set(gates)
    summit_set = set(summits)
    
    # 게이트 중 하나에서 x까지 갈 때의 최소 intentsity
    dist = [INF] * (n + 1)
    
    # 다익스트라
    pq = []
    for g in gates:
        dist[g] = 0
        heapq.heappush(pq, (0, g))
        
    while pq:
        cur_intensity, cur = heapq.heappop(pq)
        
        
        if cur_intensity > dist[cur]:
            continue
            
        if cur in summit_set:
            continue
            
        for nxt, w in graph[cur]:
            if nxt in gate_set:
                continue
            
            new_intensity = max(cur_intensity, w)
            
            if new_intensity < dist[nxt]:
                dist[nxt] = new_intensity
                heapq.heappush(pq, (new_intensity, nxt))
    
    # 정답 선택
    best_summit = None
    best_intensity = INF

    for s in sorted(summits):
        if dist[s] < best_intensity:
            best_intensity = dist[s]
            best_summit = s
                
    return [best_summit, best_intensity]  