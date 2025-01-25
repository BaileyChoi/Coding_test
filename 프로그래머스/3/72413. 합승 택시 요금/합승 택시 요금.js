function solution(n, s, a, b, fares) {
    
    let minCost = Infinity;
    
    // 그래프 초기화
    const graph = Array.from({ length: n + 1}, () => Array(n + 1).fill(Infinity));
    
    for (let i = 1; i <= n; i++) {
        graph[i][i] = 0;
    }
    
    for (let [c, d, f] of fares) {
        graph[c][d] = f;
        graph[d][c] = f;
    }
    
    // 지점 간 최단 거리 계산
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }
    
    // 최소 비용 계산
    for (let k = 1; k <= n; k++) {
        const cost = graph[s][k] + graph[k][a] + graph[k][b];
        minCost = Math.min(minCost, cost);
    }
    
    return minCost;
}