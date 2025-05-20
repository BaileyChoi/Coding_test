def solution(info, edges):
    # 방문을 체크할 수 있는 배열을 선언
    visited = [False] * len(info)
    # 0번 노드를 방문한 상태로 시작
    visited[0] = True
    # DFS를 통해 방문한 경우의 수 중 가장 양을 많이 방문한 경우 반환
    return dfs(info, edges, visited, 1, 0)

def dfs(info, edges, visited, sheep, wolf):
    # 만약 늑대가 양보다 크거나 같은 빠져나옴
    if sheep == wolf:
        return sheep
    max_sheep = sheep
    
    # 모든 edge를 확인
    for parent, child in edges:
        # 부모가 방문한 상태고 자식이 아직 방문되지 않은 상태라면 방문
        if visited[parent] and not visited[child]:
            # 다음 노드 방문 표시
            visited[child] = True
            # 다음 노드가 양일 경우
            if info[child] == 0:
                max_sheep = max(max_sheep, dfs(info, edges, visited, sheep + 1, wolf))
            # 늑대일 경우
            else:
                max_sheep = max(max_sheep, dfs(info, edges, visited, sheep, wolf + 1))
            # 다음 노드 방문 표시 해제
            visited[child] = False
    
    return max_sheep
                