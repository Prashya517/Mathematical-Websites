// Function to show the selected tool's content
function openTool(toolId) {
    // Show the tool section
    document.getElementById("tool-section").style.display = "block";

    // Hide all tool content sections
    let toolContents = document.querySelectorAll(".tool-content");
    toolContents.forEach(content => content.style.display = "none");

    // Show the selected tool content
    document.getElementById(toolId).style.display = "block";
}

// 1. Calculator Function
function calculate() {
    let input = document.getElementById("calc-input").value;
    try {
        document.getElementById("calc-result").textContent = eval(input);
    } catch (error) {
        document.getElementById("calc-result").textContent = "Invalid Expression";
    }
}

// 2. Armstrong Number Function
function checkArmstrong() {
    let num = parseInt(document.getElementById("armstrong-input").value);
    if (isNaN(num)) {
        document.getElementById("armstrong-result").textContent = "Invalid Input";
        return;
    }

    let sum = 0, temp = num, digits = num.toString().length;
    
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    document.getElementById("armstrong-result").textContent = 
        sum === num ? "Yes, it's an Armstrong number" : "No, it's not an Armstrong number";
}

// 3. Number System Conversion Functions
function toBinary() {
    let num = parseInt(document.getElementById("conv-input").value);
    document.getElementById("conv-result").textContent = isNaN(num) ? "Invalid Input" : num.toString(2);
}

function toDecimal() {
    let num = document.getElementById("conv-input").value;
    let result = parseInt(num, 2);
    document.getElementById("conv-result").textContent = isNaN(result) ? "Invalid Binary Number" : result;
}

// 4. Palindrome Check Function
function checkPalindrome() {
    let num = document.getElementById("palindrome-input").value;
    let str = num.toString();
    let reversed = str.split("").reverse().join("");

    document.getElementById("palindrome-result").textContent = 
        str === reversed ? "Yes, it's a Palindrome" : "No, it's not a Palindrome";
}

// 5. Quadratic Equation Solver
function solveQuadratic() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        document.getElementById("quad-result").textContent = "Invalid Input";
        return;
    }

    let d = b * b - 4 * a * c;
    if (d > 0) {
        let root1 = (-b + Math.sqrt(d)) / (2 * a);
        let root2 = (-b - Math.sqrt(d)) / (2 * a);
        document.getElementById("quad-result").textContent = `${root1.toFixed(2)}, ${root2.toFixed(2)}`;
    } else if (d === 0) {
        let root = -b / (2 * a);
        document.getElementById("quad-result").textContent = root.toFixed(2);
    } else {
        document.getElementById("quad-result").textContent = "No Real Roots";
    }
}

// 6. Fibonacci Series Generator
function generateFibonacci() {
    let n = parseInt(document.getElementById("fibonacci-input").value);
    if (isNaN(n) || n <= 0) {
        document.getElementById("fibonacci-result").textContent = "Enter a valid number";
        return;
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById("fibonacci-result").textContent = fib.join(", ");
}

// 7. Math Trivia Generator
function showFact() {
    let facts = [
        "Zero is the only number that cannot be represented in Roman numerals.",
        "A ‘jiffy’ is an actual unit of time: 1/100th of a second.",
        "The sum of angles in a triangle is always 180 degrees.",
        "Pi is an irrational number with infinite decimal places."
    ];
    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact").textContent = randomFact;
}

// 8. Prime Number Checker
function checkPrime() {
    let num = parseInt(document.getElementById("prime-input").value);
    if (isNaN(num) || num < 2) {
        document.getElementById("prime-result").textContent = "Invalid Input";
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    document.getElementById("prime-result").textContent = 
        isPrime ? "Yes, it's a prime number" : "No, it's not a prime number";
}

// 9. Odd/Even Checker
function checkOddEven() {
    let num = parseInt(document.getElementById("oddeven-input").value);
    if (isNaN(num)) {
        document.getElementById("oddeven-result").textContent = "Invalid Input";
        return;
    }

    document.getElementById("oddeven-result").textContent = 
        num % 2 === 0 ? "Even" : "Odd";
}

// 10. Inverse Function
function calculateInverse() {
    let num = parseFloat(document.getElementById("inverse-input").value);
    if (isNaN(num) || num === 0) {
        document.getElementById("inverse-result").textContent = "Invalid Input";
        return;
    }

    document.getElementById("inverse-result").textContent = (1 / num).toFixed(2);
}

// 11. Complex Number Operations
function addComplex() {
    let real1 = parseFloat(document.getElementById("complex-real1").value);
    let imag1 = parseFloat(document.getElementById("complex-imag1").value);
    let real2 = parseFloat(document.getElementById("complex-real2").value);
    let imag2 = parseFloat(document.getElementById("complex-imag2").value);

    if (isNaN(real1) || isNaN(imag1) || isNaN(real2) || isNaN(imag2)) {
        document.getElementById("complex-result").textContent = "Invalid Input";
        return;
    }

    let resultReal = real1 + real2;
    let resultImag = imag1 + imag2;
    document.getElementById("complex-result").textContent = 
        `${resultReal} + ${resultImag}i`;
}

function subtractComplex() {
    let real1 = parseFloat(document.getElementById("complex-real1").value);
    let imag1 = parseFloat(document.getElementById("complex-imag1").value);
    let real2 = parseFloat(document.getElementById("complex-real2").value);
    let imag2 = parseFloat(document.getElementById("complex-imag2").value);

    if (isNaN(real1) || isNaN(imag1) || isNaN(real2) || isNaN(imag2)) {
        document.getElementById("complex-result").textContent = "Invalid Input";
        return;
    }

    let resultReal = real1 - real2;
    let resultImag = imag1 - imag2;
    document.getElementById("complex-result").textContent = 
        `${resultReal} + ${resultImag}i`;
}

// 12. Factorial Calculator
function calculateFactorial() {
    let num = parseInt(document.getElementById("factorial-input").value);
    if (isNaN(num) || num < 0) {
        document.getElementById("factorial-result").textContent = "Invalid Input";
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById("factorial-result").textContent = factorial;
}

// 13. Matrix Operations
function addMatrices() {
    // Implement matrix addition logic here
}

function multiplyMatrices() {
    // Implement matrix multiplication logic here
}

// 14. Statistics Calculator
function calculateMean() {
    let input = document.getElementById("statistics-input").value;
    let numbers = input.split(",").map(Number);
    if (numbers.some(isNaN)) {
        document.getElementById("statistics-result").textContent = "Invalid Input";
        return;
    }

    let mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    document.getElementById("statistics-result").textContent = mean.toFixed(2);
      
    let median = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    document.getElementById("statistics-result").textContent = median.toFixed(2);

    let mode = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    document.getElementById("statistics-result").textContent = mode.toFixed(2);
    function calculateMedian() {
        // Implement median calculation logic here
    }
    
    function calculateMode() {
        // Implement mode calculation logic here
    }
}

// 15. Algebra Solver
function solveAlgebra() {
    let equation = document.getElementById("algebra-input").value;
    try {
        // Example: Solve linear equations (for demonstration purposes)
        let result = eval(equation); // Replace with actual algebra solver logic
        document.getElementById("algebra-result").textContent = result;
    } catch (error) {
        document.getElementById("algebra-result").textContent = "Invalid Equation";
    }
}

// 16. Applied Mathematics Solver
function solveAppliedMath() {
    let problem = document.getElementById("applied-math-input").value;
    // Example: Solve applied math problems (for demonstration purposes)
    document.getElementById("applied-math-result").textContent = "Solution: " + problem;
}

// 17. Calculus and Analysis Solver
function solveCalculus() {
    let functionInput = document.getElementById("calculus-input").value;
    // Example: Solve calculus problems (for demonstration purposes)
    document.getElementById("calculus-result").textContent = "Solution: " + functionInput;
}

// 18. Number Theory Checker
function solveNumberTheory() {
    let num = parseInt(document.getElementById("number-theory-input").value);
    if (isNaN(num)) {
        document.getElementById("number-theory-result").textContent = "Invalid Input";
        return;
    }

    // Example: Check if the number is prime (for demonstration purposes)
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    document.getElementById("number-theory-result").textContent = 
        isPrime ? "Yes, it's a prime number" : "No, it's not a prime number";
}

// 19. Topology Solver
function solveTopology() {
    let problem = document.getElementById("topology-input").value;
    // Example: Solve topology problems (for demonstration purposes)
    document.getElementById("topology-result").textContent = "Solution: " + problem;
}

// 20. Geometry Solver
function solveGeometry() {
    let problem = document.getElementById("geometry-input").value;
    // Example: Solve geometry problems (for demonstration purposes)
    document.getElementById("geometry-result").textContent = "Solution: " + problem;
}

// 21. Probability Solver
function solveProbability() {
    let problem = document.getElementById("probability-input").value;
    // Example: Solve probability problems (for demonstration purposes)
    document.getElementById("probability-result").textContent = "Solution: " + problem;
}

// Search Functionality
document.getElementById("search").addEventListener("input", function () {
    let searchQuery = this.value.toLowerCase(); // Get the search query
    let tools = document.querySelectorAll(".tool p"); // Get all tool names

    tools.forEach(tool => {
        let toolName = tool.textContent.toLowerCase(); // Get the tool name
        let toolContainer = tool.closest(".tool"); // Get the parent tool container

        // Show or hide the tool based on the search query
        if (toolName.includes(searchQuery)) {
            toolContainer.style.display = "flex"; // Show the tool
        } else {
            toolContainer.style.display = "none"; // Hide the tool
        }
    });
});