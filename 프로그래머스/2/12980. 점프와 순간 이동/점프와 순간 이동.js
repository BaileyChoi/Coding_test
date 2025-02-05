function solution(n)
{
    var answer = 0;
    
    while (n > 0) {
        if (n % 2 === 1) answer++;
        n = Math.floor(n / 2);
    }

    return answer;
}