def solution(bandage, health, attacks):
    
    max_time = max([attack[0] for attack in attacks])
    
    time = 0
    success = 0
    attack_idx = 0
    max_health = health
    for time in range(1, max_time + 1):
        # if 몬스터에게 공격 받았을 때
        if attacks and time == attacks[attack_idx][0]:
            health -= attacks[attack_idx][1]
            # if 체력이 0 이하면 죽음
            if health <= 0:
                return -1
            success = 0
            attack_idx += 1
        # else: 회복
        else:  
            success += 1
            health += bandage[1]
                
            # if 연속 성공 == bandage[0]: 추가 회복
            if success == bandage[0]:
                health += bandage[2]
                success = 0
            # if health > max_health: 최대 체력에서 커질 수 없음
            if health > max_health:
                health = max_health
                
    return health