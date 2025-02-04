function solution(n) {
    let Fib = [];
    const Big = 1234567;
    
    Fib[0] = 0;
    Fib[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        Fib[i] = (Fib[i - 1] + Fib[i - 2]) % Big;
    }
    
    return Fib[n];
}