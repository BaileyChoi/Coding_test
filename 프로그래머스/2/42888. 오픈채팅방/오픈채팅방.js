function solution(record) {
    
    let nickname = new Map();
    let messages = [];
    
    // 유저 아이디와 닉네임 매핑 관리
    for (let i = 0; i < record.length; i++) {
        const [action, uid, name] = record[i].split(" ");
        
        if (action === "Enter") {
            nickname.set(uid, name);
            messages.push({uid, action: "enter"});
        } else if (action === "Leave") {
            messages.push({uid, action: "leave"});
        } else if (action === "Change") {
            nickname.set(uid, name);
        }
    }
    
    // 출력 메시지 생성
    return messages.map(({ uid, action }) => {
        const name = nickname.get(uid);
        return `${name}님이 ${action === "enter" ? "들어왔습니다." : "나갔습니다."}`;
    });
}