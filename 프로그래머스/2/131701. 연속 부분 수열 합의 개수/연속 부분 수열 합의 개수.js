function solution(elements) {
    let hap = new Set();
    
    const numRing = elements.concat(elements);
        
    for (let i = 0; i < elements.length; i++) { // i : 시작점
        let sum = 0;
        for (let j = 0; j < elements.length; j++) { // j : 길이
            sum += numRing[i + j];
            hap.add(sum);
        }
    } 
    
    return hap.size;
}