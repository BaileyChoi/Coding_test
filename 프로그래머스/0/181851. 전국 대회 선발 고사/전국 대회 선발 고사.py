def solution(rank, attendance):
    students = []
    
    for i, (r, a) in enumerate(zip(rank, attendance)):
        if a:
            students.append((r, i))
            
    students.sort()
    
    return 10000 * students[0][1] + 100 * students[1][1] + students[2][1]
