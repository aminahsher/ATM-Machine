#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000;

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        { name:"pin",
        message:"enter your pin",
        type: "number"
}]
);
if (pinAnswer.pin ===myPin)
{
    console.log("correct pin code!!!");

  let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message:"select option",
                type: "list",
                choices:["withdraw", "check balance"]
            },
        ]
    );
     
    if(operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                },
            ]
        );

    if(amountAns.amount <= myBalance){
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is ${myBalance}`);

    }
    else{
        console.log("your balance is insufficient");
    }
}
    
 else if(operationAns.operation === "check balance"){
    console.log(`your balance is  ${myBalance}`);
}
}
else{ 
    console.log("your pin is incorrect");
 }

