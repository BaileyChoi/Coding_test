function solution(n)
{
    var answer = 0;

    const n2 = n.toString();
    
    for (let i = 0; i < n2.length; i++) {
        answer += Number(n2[i]);
    }

    return answer;
}