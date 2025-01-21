function solution(n, words) {
    var answer = [0,0];
    
    const wordSet  = new Set();
    wordSet.add(words[0]);
    
    for (let i = 1; i < words.length; i++) {
       // 조건: 단어가 규칙에 맞지 않거나 이미 사용된 경우
        if (words[i - 1].slice(-1) !== words[i].slice(0,1) || wordSet.has(words[i])) {
            const num = (i % n) + 1;    // 몇 번째 사람
            const turn  = (Math.floor(i / n) + 1);  // 몇 번째 차례
            answer = [num, turn];
            break;
       } 
        wordSet.add(words[i]);
    }
    
    return answer;
}