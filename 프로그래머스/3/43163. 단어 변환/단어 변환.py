from collections import deque

def solution(begin, target, words):
    queue = deque()
    visited = set()
    
    def canChange(word1, word2):
        diff = 0
        for i in range(len(word1)):
            if word1[i] != word2[i]:
                diff += 1
            if diff >= 2:
                return False
        return True
    
    
    queue.append((begin, 0))
    visited.add(begin)
    
    while queue:
        cur, count = queue.popleft()
        
        if cur == target:
            return count
        
        for word in words:
            if canChange(cur, word):
                if word not in visited:
                    visited.add(word)
                    queue.append((word, count + 1))
                    
    return 0