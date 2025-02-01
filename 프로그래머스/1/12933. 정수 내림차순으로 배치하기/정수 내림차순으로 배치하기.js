function solution(n) {
    
    let string = n.toString();
    let array = string.split("");
    
    array.sort((a, b) => b - a);
    
    return Number(array.join(""));
}