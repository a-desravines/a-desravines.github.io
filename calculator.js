
document.write(`
<style>
table {
    border-collapse: collapse;
    margin: 20px 0;
    font-family: Arial, sans-serif;
}
th, td {
    border: 1px solid black;
    padding: 8px 12px;
    text-align: center;
}
th {
    background-color: orange;
}
</style>
`);


let results = [];

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
    let x = prompt("Enter first number:");
    if (x === null) break;

    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let y = prompt("Enter second number:");
    if (y === null) break;

    let numX = parseFloat(x);
    let numY = parseFloat(y);
    let result;

    if (isNaN(numX) || isNaN(numY)) {
        result = "wrong input number";
    } else {
        switch (operator) {
            case "+":
                result = numX + numY;
                break;
            case "-":
                result = numX - numY;
                break;
            case "*":
                result = numX * numY;
                break;
            case "/":
                result = numY === 0 ? "division by zero" : numX / numY;
                break;
            case "%":
                result = numX % numY;
                break;
            default:
                result = "computation error";
        }
    }

    document.write(
        "<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>"
    );

    if (typeof result === "number") {
        results.push(result);
    }
}

document.write("</table>");


if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((sum, val) => sum + val, 0);
    let avg = total / results.length;

    document.write("<br><table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(
        "<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>"
    );
    document.write("</table>");
}
