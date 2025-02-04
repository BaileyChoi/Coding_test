function solution(s) {
    let a = [];
    
    for (let i = 0; i < s.length; i++) {
        if (a.length > 0 && s[i] === a[a.length - 1]) {
            a.pop();
        } else {
            a.push(s[i]);
        }
    }
    
    return a.length === 0 ? 1 : 0;
}