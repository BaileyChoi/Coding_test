def solution(s):
    answer = []
    for word in s.split(" "):
        answer.append(word.capitalize())
    return " ".join(answer)