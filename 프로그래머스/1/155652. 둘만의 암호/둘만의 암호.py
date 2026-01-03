def solution(s, skip, index):
    answer = ''
    
    for c in s:
        cur = ord(c)
        
        move = index
        while move:
            cur += 1
            
            if cur > ord('z'):
                cur = ord('a')
                
            if chr(cur) in skip:
                continue
                
            move -= 1
        
        answer += chr(cur)
    
    return answer