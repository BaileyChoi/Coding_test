from itertools import permutations

def solution(babbling):
    answer = 0
    
    words = ["aya", "ye", "woo", "ma"]
    permuts = []
    for i in range(1, 5):
        for p in permutations(words, i):
            wordlist = ""
            for word in p:
                wordlist += word
            permuts.append(wordlist)
            
    for b in babbling:
        if b in permuts:
            answer += 1
    
    return answer