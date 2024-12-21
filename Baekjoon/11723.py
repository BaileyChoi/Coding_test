# 집합
import sys
# sys.stdin = open("example.txt","r")
input = sys.stdin.readline

M = int(input().strip())

S = set()

for _ in range(M):
    command = input().strip().split()

    if command[0] == "add":
        S.add(int(command[1]))
    elif command[0] == "remove":
        S.discard(int(command[1]))
    elif command[0] == "check":
        print(1 if int(command[1]) in S else 0)
    elif command[0] == "toggle":
        x = int(command[1])
        if x in S:
            S.remove(x)
        else :
            S.add(x)
    elif command[0] == "all":
        S = set(range(1, 21))
    elif command[0] == "empty":
        S.clear()

