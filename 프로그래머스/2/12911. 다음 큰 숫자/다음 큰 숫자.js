function solution(n) {
    let answer = n + 1;
    
    function func(a) {
        let countOne = 0;
        while (a !== 1) {
            if (a % 2 === 1) countOne++;
            a = Math.floor(a / 2);
        }
        return countOne;
    }
    
    while (true) {
        if (func(n) === func(answer)) break;
        answer++;
    }
    
    return answer;
}