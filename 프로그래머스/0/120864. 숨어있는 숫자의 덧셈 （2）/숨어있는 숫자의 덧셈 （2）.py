def solution(my_string):
    answer = ''
    for i in my_string:
        if i.isdigit():
            answer += i
        else:
            answer += ' '
            
    return sum(int(i) for i in answer.split())