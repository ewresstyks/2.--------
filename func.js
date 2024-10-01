// function twoNumbers(n,m) {
//     if(n%2==0 && m%2==0) {
//         return n*m;
//     }
//     else if(n%2!=0 && m%2!=0) {
//         return n+m;
//     }
//     else if(n%2!=0 && m%2==0) {
//         return n;
//     }
//     else if(n%2==0 && m%2!=0) {
//         return m;
//     }
// }
// n = parseInt(prompt("Enter First number -- "));
// m = parseInt(prompt("Enter Second number -- "))
// document.write("Ur number is "+twoNumbers(n,m));

function Rectangle(x1, x2, x3, x4, x5, x6, x7, x8) {
    if (x1 == x7 && x2 == x4 && x3 == x5 && x6 == x8) {
        document.write("Rectangle can exist!!");
    }
    else {
        document.write("Your rectangle can`t exist ")
    }
}

Rectangle(2, 4, 5, 4, 5, 1, 2, 1)