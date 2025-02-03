function solution(n) {
    let answer = 1;
    
    for (let i = 1; i <= n / 2 + 1; i++) {
        let sum = 0;
        sum += i;
        for (let j = i + 1; j < n / 2 + 1; j++) {
            sum += j;
            if (sum > n) break;
            if (sum === n) answer++;
        }
    }
         
    return answer;
}