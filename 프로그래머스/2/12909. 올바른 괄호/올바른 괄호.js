function solution(s){
    const string = [];
    
    for (let c of s) {
        if (c === "(") {
            string.push("false");
        } else {
            if (!string[0]) return false;
            string.pop();
        }
    }
    
    return string[0] === "false" ? false : true;
}