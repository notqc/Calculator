let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
var pw = document.getElementById('pow').innerText;
let screenValue = '';
for (item of buttons){
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        function factorial(n) { 
            if (n === 0) { 
                return 1; 
            } 
            else { 
                return n * factorial( n - 1 ); 
            } 
        }
        
        if (buttonText == 'x') {
                screenValue = screenValue + '*';
                screen.value = screenValue;}
            else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '⌫') {
                screenValue = screenValue.substring(0, (screenValue.length)-1);
                screen.value = screenValue;
            }
            else if (buttonText == '÷') {
                    buttonText = '/';
                    screenValue += buttonText;
                    screen.value = screenValue;
                }
        
                else if (buttonText == '√X') {
                        screenValue += 'Math.sqrt(';
                        screen.value = screenValue;
                    }
                    else if (buttonText == pw) {
                            screenValue += '**';
                            screen.value = screenValue;
                        }
                        else if (buttonText == 'X !') {
                                num = eval(screenValue);
                                f = factorial(num);
                                screen.value = f;
                            }
                            else if (buttonText == 'π') {
            screenValue += 'Math.PI';
            screen.value = screenValue;
        }
        else if (buttonText == 'e') {
                screenValue += 'Math.exp(';
                screen.value = screenValue;
            }
            else if (buttonText == '½') {
                    screenValue += 0.5;
                    screen.value = screenValue;
                }
                else if (buttonText == 'lg') {
                        screenValue += 'Math.log(';
                        screen.value = screenValue;
                    }
                    else if (buttonText == 'sin') {
                            screenValue += 'Math.sin(';
                            screen.value = screenValue;
                        }
                        else if (buttonText == 'tan') {
                                screenValue += 'Math.tan(';
                                screen.value = screenValue;
                            }
                            else if (buttonText == 'cos') {
                                    screenValue += 'Math.cos(';
                                    screen.value = screenValue;
                                
                                } else if (buttonText === '=') {
                                                    try {
                                                        screenValue = eval(screenValue);
                                                    } catch {
                                                        screenValue = 'Error';
                                                    }
                                                    screen.value = screenValue;}
                                    
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        // screen.value = screenValue.join('');
        screen.scrollLeft = screen.scrollWidth;
    }
)}




// function appendNumber(number) {
    //     const display = document.getElementById('screen');
    //     screen.value += number;
    //     screen.focus();  // Focus on the input field
    //     screen.scrollLeft = screen.scrollWidth;  // Ensure the cursor is at the end
    // }
    
//     window.onload = () => {
//         let screen = document.getElementById('screen');
//     let buttons = document.querySelectorAll('button'); // Added missing 'let' declaration
//     let pw = document.getElementById('pow').innerText; // Corrected variable declaration with 'let'
//     let screenValue = [];
    
//     // Loop through each button and add event listeners
//     for (let item of buttons) {
//         item.addEventListener('click', (e) => {
//             let buttonText = e.target.innerText; // Use 'let' for local variable declaration
            
//             // Function to calculate factorial
//             function factorial(n) {
//                 if (n === 0) {
//                     return 1;
//                 } else {
//                     return n * factorial(n - 1);
//                 }
//             }
            
//             // Handling different button clicks
            
//             if (buttonText === 'x') {
//                 if(typeof screenValue[-1] == 'number' && !isNaN(x))
//                     screenValue.push("*");
//             } else if (buttonText === 'AC') {
//                 screenValue = [];
//             } else if (buttonText === '⌫') {
//                 screenValue.pop();
//             } else if (buttonText === '÷') {
//         if(typeof screenValue[-1] == 'number' && !isNaN(x))
//             screenValue.push('/');
//     } else if (buttonText === '+') {
//         if(typeof screenValue[-1] == 'number' && !isNaN(x))
//             screenValue.push('+');
//     } else if (buttonText === '%') {
//         if(typeof screenValue[-1] == 'number' && !isNaN(x))
//             screenValue.push('%');
//     } else if (buttonText === '-') {
//         if(typeof screenValue[-1] == 'number' && !isNaN(x))
//                 screenValue.push('-');
//             } else if (buttonText === '√X') {
//                 screenValue.push('Math.sqrt(');
//             } else if (buttonText === pw) {
//                 screenValue.push('**');
//             } else if (buttonText === 'π') {
//                 screenValue.push('Math.PI');
//             } else if (buttonText === 'e') {
//                 screenValue.push('Math.exp(');
//             } else if (buttonText === '½') {
//                 screenValue.push('0.5');
//             } else if (buttonText === 'lg') {
//                 screenValue.push('Math.log(');
//             } else if (buttonText === 'sin') {
//                 screenValue.push('Math.sin(');
//             } else if (buttonText === 'tan') {
//                 screenValue.push('Math.tan(');
//             } else if (buttonText === 'cos') {
//                 screenValue.push('Math.cos(');
//             } else if (buttonText === '=') {
    //                 screen.value = eval(screenValue.join(''));
    //                 screenValue = [screen.value]; // Clear screenValue and store result
    //             } else {
        //                 buttonText = Number(buttonText)
        //                 screenValue.push((buttonText));
//             }

//             // Update screen value
//             screen.value = screenValue.join('');
//             screen.scrollLeft = screen.scrollWidth;
//         });
//     }

//     // Function to append number to screen value
//     function appendNumber(number) {
    //         screen.value += number;
    //         screen.focus(); // Focus on the input field
    //         screen.scrollLeft = screen.scrollWidth; // Ensure the cursor is at the end
//     }
// }

// window.onload = () => {
//     let screen = document.getElementById('screen');
//     let buttons = document.querySelectorAll('button');
//     let pw = document.getElementById('pow').innerText;
//     let screenValue = [];
    
//     // Loop through each button and add event listeners
//     for (let item of buttons) {
//         item.addEventListener('click', (e) => {
//             let buttonText = e.target.innerText;
//             var pw = document.getElementById('pow').innerText;
            
//             // Function to calculate factorial
//             function factorial(n) {
//                 if (n === 0) {
//                     return 1;
//                 } else {
//                     return n * factorial(n - 1);
//                 }
//             }

//             // Handling different button clicks
//             if (buttonText === 'x') {
//                 buttonText = '*';
//             } else if (buttonText === '÷') {
//                 buttonText = '/';
//             } else if (buttonText === 'AC') {
//                 screenValue = [];
//                 screen.value = screenValue;
//                 return;

//             } else if (buttonText === '√X') {
//                 buttonText = ('Math.sqrt(');

//             } else if (buttonText === pw) {
//                 buttonText = ('**');

//             } else if (buttonText === 'π') {
//                 buttonText = ('Math.PI');

//             } else if (buttonText === 'e') {
//                 buttonText = ('Math.exp(');

//             } else if (buttonText === '½') {
//                 buttonText = ('0.5');

//             } else if (buttonText === 'lg') {
//                 buttonText = ('Math.log(');

//             } else if (buttonText === 'sin') {
//                 buttonText = ('Math.sin(');

//             } else if (buttonText === 'tan') {
//                 buttonText = ('Math.tan(');

//             } else if (buttonText === 'cos') {
//                 buttonText = ('Math.cos(');

//             } else if (buttonText === '⌫') {
//                 screenValue = screenValue.slice(0, -1);
//                 screen.value = screenValue;
//                 return;

//             } else if (buttonText === 'X!') {
//                 screenValue = screenValue.slice(0, -2).join('')
//                 screenValue = factorial(screenValue);
//                 screen.value = screenValue;
//                 return;

//             } else if (buttonText === '=') {
//                 try {
//                     screenValue = eval(screenValue.join(''));
//                 } catch {
//                     screenValue = 'Error';
//                 }
//                 screen.value = screenValue;


//             } else if (buttonText === 'pw') {
//                 buttonText = '**';
//             }

//             // Prevent adding consecutive operators
//             const lastChar = screenValue.slice(-1);
//             if ( ['+', '-', '*', '/', '%', '**'].includes(lastChar)){

//                 if ( ['+', '-', '*', '/', '%', '**'].includes(buttonText))
//                     return;

//                 else
//                 screenValue.push(buttonText);}

//             else{
//             screenValue.push(buttonText);
//             }

//             screen.value = screenValue.join('');
//         });
//     }
// }
// function evaluateExpression(expression) {
//     // Replace factorial notation with function calls
//     const factorialRegex = /(\d+)!/g;
//     expression = expression.replace(factorialRegex, (_, num) => `factorial(${num})`);
    
//     return eval(expression).toString();
// }

// // Factorial function
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }


// // Function to append number to screen value
// function appendNumber(number) {
// let screen = document.getElementById('screen');
// screen.value += number;
// screen.focus(); // Focus on the input field
// screen.scrollLeft = screen.scrollWidth; // Ensure the cursor is at the end
// }

// // Function to append factorial
// function appendFactorial() {
// let screen = document.getElementById('screen');
// let screenValue = screen.value;
// const lastChar = screenValue.slice(-1);

// // Append factorial only if the last character is a number
// if (!isNaN(lastChar)) {
//     screen.value += '!';
// }
// }