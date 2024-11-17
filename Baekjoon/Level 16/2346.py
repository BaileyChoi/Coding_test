# 풍선 터뜨리기
import sys
from collections import deque
sys.stdin = open("example.txt","r")
input = sys.stdin.readline

n = int(input())
dequeue = deque(enumerate(map(int, input().split())))
answer = []

while dequeue:
    idx, paper = dequeue.popleft()
    answer.append(idx + 1)

    if paper > 0 :
        dequeue.rotate(-(paper - 1))
    elif paper < 0:
        dequeue.rotate(-paper)

print(" ".join(map(str, answer)))