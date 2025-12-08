a, b = map(int, input().strip().split(' '))
answer = ['*' * a for _ in range(b)]
print('\n'.join(answer))