function solution(s) {
    const isValidString = (str) => {
        const stack = [];
        const pairs = { ")": "(", "]": "[", "}": "{" };
        
        for (let c of str) {
            if (c in pairs) {   // 닫는 괄호
                if (!stack.length || stack.pop() !== pairs[c]) return false;
            } else {    // 여는 괄호
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
    
    let answer = 0;
    let rotated = s;
    
    for (let i = 0; i < s.length; i++) {
        if (isValidString(rotated)) answer++;
        rotated = rotated.substring(1) + rotated[0];  // 문자열 회전
    }
    
    return answer;
}