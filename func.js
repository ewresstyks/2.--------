// function simpleFunction() {
//     document.write("Данная функция не принимает аргументов и не возвращает значение<br>");
// }
// function cube(n) {
//     let c = n * n * n;
//     return c;
// }

function display(x, y) {
    if (y == undefined)
        y = x;
    let z = x * y;
    document.write(x + " умножить на " + y + " равно " + z + "<br/>");
}

function show()
{
    let z = 1;
    for (let i = 0; i < arguments.length; i++)
        z *= arguments[i];
    document.write(z + "<br/>");
}

display();
display(10);
display(10, 2);

show(5); 
show(5, 4);
show(5, 4, 3);