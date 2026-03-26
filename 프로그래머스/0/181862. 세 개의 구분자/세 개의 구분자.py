def solution(myStr):
    answer = myStr.replace('a', ' ').replace('b', ' ').replace('c', ' ')
    
    return ["EMPTY"] if not answer.split() else answer.split()