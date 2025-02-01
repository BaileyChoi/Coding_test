function solution(n) {
    let ans
    
    let string = n.toString();
    let array = new Array;
    
    for (let s of string) {
        let num = Number(s);
        array.push(num);
    }
    
    array.sort((a, b) => b - a);
    
    return Number(array.join(""));
}