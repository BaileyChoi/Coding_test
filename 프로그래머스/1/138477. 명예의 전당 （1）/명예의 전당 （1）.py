import heapq

def solution(k, score):
    answer = []
    honor = []
    for i in range(len(score)):
        if i < k:
            heapq.heappush(honor, score[i])
        else:
            if score[i] > honor[0]:
                heapq.heappop(honor)
                heapq.heappush(honor, score[i])
        answer.append(honor[0])
    return answer