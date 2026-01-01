def solution(babbling):
    def can_speak(b):
        i = 0
        n = len(b)
        while (i < n):
            if b[i:].startswith("aya") :
                if i >= 3 and b[i - 3:i] == "aya":
                    return False
                i += 3
            elif b[i:].startswith("woo"):
                if i >= 3 and b[i - 3:i] == "woo":
                    return False
                i += 3
            elif b[i:].startswith("ye"):
                if i >= 2 and b[i - 2:i] == "ye":
                    return False
                i += 2
            elif b[i:].startswith("ma"):
                if i >= 2 and b[i - 2:i] == "ma":
                    return False
                i += 2
            else:
                return False
        
        return True
        
    answer = 0
    for b in babbling:
        if can_speak(b):
            answer += 1
            
    return answer