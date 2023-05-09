const http = require('http');
const calc = require('./calculations');

num1 = 9;
num2 = 5;

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write(calc.sub(num1,num2));
    res.write('Numbers '+ num1 + ', ' + num2 +  '   sub:' + calc.sub(num1,num2) + '  sum:' + calc.sum(num1,num2) + '  div:' + calc.div(num1,num2) + '  mul:' + calc.mul(num1,num2) + '  mod:' + calc.mod(num1,num2) + '  ');
    res.end('\nThis is my first server');
    }).listen(8000);

console.log('Sever running at port http://localhost:8000');