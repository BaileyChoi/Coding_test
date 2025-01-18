const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
}).on('close', function() {
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a') {
            result += str[i].toLocaleUpperCase();
        } else {
            result += str[i].toLocaleLowerCase();
        }
    }
    
    console.log(result);
});