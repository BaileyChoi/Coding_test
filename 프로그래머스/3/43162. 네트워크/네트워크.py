from collections import deque

def solution(n, computers):
    answer = 0

    visited = [False] * n

    for i in range(0, n):
        if not visited[i]:
            # dfs(computers, visited, i)
            bfs(computers,visited, i)
            answer += 1

    return answer


# def dfs(graph, visited, curVertex):
#     visited[curVertex] = True
#     for nextVertex in range(len(graph)):
#         if graph[curVertex][nextVertex] == 1 and not visited[nextVertex]:
#             dfs(graph, visited, nextVertex)

def bfs(graph, visited, curVertex):
    queue = deque()
    
    queue.append(curVertex)
    visited[curVertex] = True
    
    while queue:
        curVertex = queue.popleft()
        
        for nextVertex in range(len(graph)):
            if graph[curVertex][nextVertex] == 1 and not visited[nextVertex]:
                queue.append(nextVertex)
                visited[nextVertex] = True
    
    