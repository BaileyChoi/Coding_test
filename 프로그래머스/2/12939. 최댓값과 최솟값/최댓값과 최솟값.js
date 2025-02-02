function solution(s) {
    let answer = "";
    
    const nums = s.split(" ").map(Number);
    
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    answer = min + " " + max;
    return answer;
}