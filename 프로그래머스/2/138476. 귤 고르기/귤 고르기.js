function solution(k, tangerine) {
    let answer = 0;
    let box = new Map();
    
    // 귤 개수 그룹화
    tangerine.forEach((t) => {
        box.set(t, (box.get(t) || 0) + 1);
    })
    
    // 귤 개수가 많은 종류부터 선택
    let sortedBox = [...box.values()].sort((a, b) => b - a);
    
    // 개수가 많은 것부터 차례로 선택하면서 k를 충족하면 종료
    let sum = 0;
    for (let count of sortedBox) {
        sum += count;
        answer++;
        if (sum >= k) return answer;
    }
    
    // 선택할 귤의 종류 수를 반환
    return answer;
}