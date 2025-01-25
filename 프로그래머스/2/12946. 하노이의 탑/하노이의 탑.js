function solution(n) {
    var answer = [];
    
    function hanoi(n, from, to, via) {
        if (n === 1) {
            answer.push([from, to]);
        } else {
            hanoi(n - 1, from, via, to);
            hanoi(1, from, to, via);
            hanoi(n - 1, via, to, from);
        }
    }
    
    hanoi(n, 1, 3, 2);
    
    return answer;
}