from collections import Counter

def solution(participant, completion):
    
    # 방법 1    
#     dic = {}
    
#     for p in participant:
#         dic[p] = dic.get(p, 0) + 1
        
#     for c in completion:
#         dic[c] -= 1
    
#     for name in dic:
#         if dic[name] > 0:
#             return name
        
    # 방법 2
    answer  = Counter(participant) - Counter(completion)
    return list(answer.keys())[0]
  