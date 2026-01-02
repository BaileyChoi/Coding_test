def solution(n, results):
    answer = 0
    
    graph = [[0] * n for _ in range(n)]
    
    for A, B in results:
        graph[A - 1][B - 1] = 1
        graph[B - 1][A - 1] = -1
        
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if graph[i][k] == 1 and graph[k][j] == 1:
                    graph[i][j] = 1
                    graph[j][i] = -1
                elif graph[i][k] == -1 and graph[k][j] == -1:
                    graph[i][j] = -1
                    graph[j][i] = 1
                    
    for i in range(n):
        count = 0
        for j in range(n):
            if graph[i][j] != 0:
                count += 1
                
        if count == n - 1:
            answer += 1
    
    return answer