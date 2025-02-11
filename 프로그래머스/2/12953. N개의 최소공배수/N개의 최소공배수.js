function solution(arr) {
    const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);
    const getLCM = (a, b) => a * b / getGCD(a, b);
    
    let lcm = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        lcm = getLCM(lcm, arr[i]);
    }
    
    return lcm;
}