function solution(s) {
    
    let countZero = 0;
    let countConvert = 0;
    
    while( s !== "1") {
        let c = "";
        
        // 0 제거
        for (let n of s) {
            if (n !== "0") {
                c += n; 
            } else {
                countZero++;
            }
        }

        // c를 2진법으로 변환
        s = parseInt(c.length, 10).toString(2);
        countConvert++;
    }
    
    return [countConvert, countZero];
}