function solution(n) {
    let limit = 50000000000000;
    const square = new Set();
    
    let i = 1;
    while (i * i <= limit) {
        square.add(i * i);
        i++;
    }
    
    if (square.has(n)) return Math.pow(Math.sqrt(n) + 1, 2);
    else return -1;
}