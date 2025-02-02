function solution(s) {
    var answer = [];
    
    const sentence = s.split(" ");
    
    for (let word of sentence) {
        if (word.length === 0) {
            answer.push("");
            continue;
        }
        
        let newWord = "";
        if (isNaN(word[0]) === false) {
            newWord += word[0];
        } else {
            newWord += word[0].toUpperCase();
        }
        
        newWord += word.slice(1).toLowerCase();
        answer.push(newWord); 
    }
    
    return answer.join(" ");
}