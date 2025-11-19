def parse(file):
    # head 찾기
    i = 0
    while i < len(file) and not file[i].isdigit():
        i += 1

    # number 찾기
    k = i
    while k < len(file) and file[k].isdigit() and (k - i) < 5:
        k += 1
    
    return file[:i], file[i:k]

def solution(files):    
    # 파싱
    parsed = []
    for file in files:
        head, num = parse(file)
        parsed.append((head.lower(), int(num), file))
    
    # 정렬
    parsed.sort(key=lambda name: (name[0], name[1]))
    
    return [p[2] for p in parsed]