def solution(my_string):
    answer = ''
    letter_set = set()
    
    for c in my_string:
        if c not in letter_set:
            answer += c
            letter_set.add(c)
    
    return answer