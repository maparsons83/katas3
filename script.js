function write (input, target) {
    let destination = document.getElementById(target);
    const div = document.createElement('div');
    div.textContent = input;
    destination.appendChild(div);
    
}

// Katas #1- Write a function named "add" that takes two arguments and returns their sum.

// You may use built-in operators to finish the definition.

// Display the result of calling add(2, 4), which should be 6.

function add(x,y) {


    return x + y;
}

write(add(2,4), 'div1');

    


// Katas #2- Write a function named "multiply" that takes two arguments and returns their product.

// You may not use built-in arithmetic operators or functions. Instead, you'll need a for loop which calls the "add" function you wrote earlier.

// Display the result of calling multiply(6, 8), which should be 48.

function multiply(x,y) {
    let result = 0;
    for (let i=1; i<=y; i++) {

        result = add(result,x);
        
    }
    return result;
}

  
write(multiply(6,8), 'div2');


// Katas #3- Write a function named "power" that takes two arguments (x and n) and returns the the result of raising x to the nth power.

// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.

// Display the result of calling power(2, 8), which should be 256

function power (x,n) {

    let result = 1;

    for (let i=1; i <= n; i++) {
        result = multiply(x,result);
    }
    return result;
}

write(power(2,8), 'div3');


// Katas #4- Write a function named "factorial" that takes a single argument and returns the factorial of that argument.

// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.

// Display ther esult of calling factorial(4), which should be 24 (4 * 3 * 2 * 1).

function factorial (x) {

    let result = x 

    for (let i = x - 1; i >= 1; i -= 1) {
        result = multiply(result, i);
    }

    return result
}

write(factorial(4), 'div4');



// Katas #5- Write a function named "fibonacci" that takes an argument n and returns the nth, Fibonacci number (Links to an external site.)Links to an external site. (click me!).

// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.

 function fibonacci(n) {

    let num = 0;
    let num2= 1;

    for (i = 1; i < n; i++) {

        fibonacci = add(num,num2);
        num = num2;
        num2 = fibonacci;
    }
    return num
 }

 write(fibonacci(8), 'div5')

// Display the result of calling fibonacci(8), which should be 13:

// 0 1 1 2 3 5 8 [13] 21

// The number in brackets is the 8th fibonacci nuber.


