let a = 5;
let b = 3;
let fun = '-';

switch(fun) 
{
    case '+':
        console.log(a+ "+" +b+ "=" +(a + b));
        break;
    case '-':
        console.log(a+ "-" +b+ "=" +(a - b));
        break;
    case '*':
        console.log(a+ "*" +b+ "=" +(a * b));
        break;
    case '/':
        console.log(a+ "/" +b+ "=" +(a / b));
        break;
    case '%':
            console.log(a+ "%" +b+ "=" +(a % b));
        break;
    default:
        console.log("Invalid operator");
}