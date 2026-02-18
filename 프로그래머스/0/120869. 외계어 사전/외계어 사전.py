def solution(spell, dic):
    return 1 if any(set(spell) == set(d) for d in dic) else 2