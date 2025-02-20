function solution(n,a,b)
{
    var round = 0;

    while (a !== b) {
        a = Math.floor((a + 1) / 2);
        b = Math.floor((b + 1) / 2);
        round++;
    }

    return round;
}