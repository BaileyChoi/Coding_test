def solution(my_string):
    my_string = my_string.split(" ")
    answer = int(my_string[0])
    
    for i, val in enumerate(my_string):
        if val == '+':
            answer += int(my_string[i + 1])
        elif val == '-':
            answer -= int(my_string[i + 1])
        
    return answer