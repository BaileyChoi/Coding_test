function solution(arr) {
    var answer = [0, 0];
    
    function compress(x, y, size) {
        let first = arr[x][y];
        
        // 주어진 영역이 하나의 숫자로 이루어져 있는지 확인
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                // 다른 숫자가 있는 경우 영역 분할
                if (arr[i][j] !== first) { 
                    let newSize = size / 2;
                    compress(x, y, newSize);            // 좌상
                    compress(x, y + newSize, newSize);  // 우상
                    compress(x + newSize, y, newSize);  // 좌하
                    compress(x + newSize, y + newSize, newSize); // 우하
                    return;
                }
            }
        }
        
        // 모든 숫자가 같다면 해당 숫자 카운트 증가
        answer[first]++;
    }
    
    compress(0, 0, arr.length);
    
    return answer;
}