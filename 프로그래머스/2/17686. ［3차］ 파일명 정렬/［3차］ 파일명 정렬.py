def parse(file):
    i = 0
    # head 찾기
    while i < len(file):
        if file[i].isdigit():
            break
        i += 1
    head = file[:i]

    k = i
    # number 찾기
    while k < len(file):
        if not file[k].isdigit():
            break
        k += 1
    number_str = file[i:k]
    
    return head, number_str

def solution(files):    
    # 파싱
    parsed = []
    for i, file in enumerate(files):
        head, num = parse(file)
        parsed.append((head.lower(), int(num), i, file))
    
    # 정렬
    parsed.sort(key=lambda name: (name[0], name[1], name[2]))
    
    return [p[3] for p in parsed]