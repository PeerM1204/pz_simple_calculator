#! /usr/bin/env node
import inquirer from "inquirer";
async function calculator() {
    const answer = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter Your First Number:",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter Your Second Number",
        },
        {
            name: "operator",
            type: "list",
            message: "select the operator you want to perform",
            choices: ["+", "-", "*", "/", "**", "%"],
        },
    ]);
    const { num1, num2, operator } = answer;
    let result;
    //for addition:
    if (answer.operator === "+") {
        result = num1 + num2;
        console.log(`Your Answer is: ${result}`);
        // for subtraction:
    }
    else if (answer.operator === "-") {
        result = num1 - num2;
        console.log(`Your Answer is:${result}`);
        //for multiplication:
    }
    else if (answer.operator === "*") {
        result = num1 * num2;
        console.log(`Your Answer is:${result}`);
        // for Division:
    }
    else if (answer.operator === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`Your Answer is: ${result}`);
        }
        else {
            console.log("Error: Division by zero!");
            return;
        }
        // for Exponetiation:
    }
    else if (answer.operator === "**") {
        result = num1 ** num2;
        console.log(`Your Answer is: ${result}`);
        // for Modulus:
    }
    else if (answer.operator === "%") {
        result = num1 % num2;
        console.log(`Your Answer is: ${result}`);
    }
    else {
        console.log("Error: Please select a correct operator.");
        return;
    }
}
;
calculator();
