function solution(s){

    let countP = 0;
    let countY = 0;
    
    for (let c of s) {
        c = c.toUpperCase();
        if (c === 'P') countP++;
        else if (c === 'Y') countY++; 
    }   
        
    if (countP === countY) return true;
    else return false;
    
    console.log(countP, countY);
}