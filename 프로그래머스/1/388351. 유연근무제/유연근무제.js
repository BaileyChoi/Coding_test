function solution(schedules, timelogs, startday) {
    var winner = 0;
    
    for(let i = 0; i < schedules.length; i++) {
        let isLate = false;
        for (let j = 0; j < 7; j++) {
            // 주말 건너뛰기
            if ((j + startday) % 7 === 6 || (j + startday) % 7 === 0) continue;    
            
            // 지각 확인 
            let limitTime = schedules[i] % 100 >= 50 ? schedules[i] + 50 : schedules[i] + 10;
            if (timelogs[i][j] > limitTime) {
                isLate = true; 
                break;
            }
        }
        if (!isLate) winner++;
    }
    
    return winner;
}