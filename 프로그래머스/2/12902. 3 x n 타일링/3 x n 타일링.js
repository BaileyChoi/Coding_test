function solution(n) {
    const MOD = 1000000007;
    
    const dp = Array(n).fill(0);
    
    dp[2] = 3;
    dp[4] = 11;
    
    for (let i = 6; i <= n; i = i + 2) {
        dp[i] = ((dp[i - 2] * 4 - dp[i - 4]) + MOD) % MOD;      
    }
    
    if (n % 2 !== 0) {
        return 0; 
    } else {
         return dp[n];
    }
    
}