def solution(n, costs):
    answer = 0
    edge_count = 0
    
    costs.sort(key=lambda x:x[2])
    
    parent = [i for i in range(n)]

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(a, b):
        ra = find(a)
        rb = find(b)
        if ra != rb:
            parent[rb] = ra
            
    for a, b, cost in costs:
        if find(a) != find(b):
            union(a, b)
            answer += cost
            edge_count += 1
            
            if edge_count == n - 1:
                return answer