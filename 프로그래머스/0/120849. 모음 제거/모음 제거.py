def solution(my_string):
    answer = ''
    moeum = ['a','e','i','o','u']

    for c in my_string:
        if c not in moeum:
            answer += c
    
    return answer