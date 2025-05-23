from collections import deque

def getDiffCount(wordA, wordB):
    diffCount = 0
    for i in range(len(wordA)):
        if wordA[i] != wordB[i]:
            diffCount += 1
    
    return diffCount

def solution(begin, target, words):
    # BFS로 최단 거리 구하기
    queue = deque()
    visited = set()
    
    # 시작점 예약 ( 문자열 begin )
    queue.append([begin, 0])
    visited.add(begin)
    
    while queue:
        # 현재 노드 방문
        [cur_word, count] = queue.popleft()
        
        # if 현재 노드 == target: return count;
        if cur_word == target:
            return count
    
        # 다음 노드 방문
        for next_word in words:
            if getDiffCount(cur_word, next_word) == 1:
                if next_word not in visited:
                    queue.append([next_word, count + 1])
                    visited.add(next_word)
        
    return 0