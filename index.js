#!/user/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
async function createtodo() {
    console.log(chalk.bgMagenta.bold("\t\t Welcome to hunza hussain Todo!!"));
    console.log("-".repeat(50));
    while (condition) {
        let opertion = await inquirer.prompt([
            {
                name: "operator",
                type: "list",
                message: chalk.blue.underline("What do you want todo your todo list?"),
                choices: ["Add", "View", "Update", "Delete", "Exit"]
            }
        ]);
        if (opertion.operator === "Add") {
            let addtask = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: chalk.yellow.underline("What do you want to add in your todo:")
                }
            ]);
            todos.push(addtask.todo);
            console.log("Todo added:", addtask.todo);
        }
        else if (opertion.operator === "View") {
            console.log("Current todos:", todos);
        }
        else if (opertion.operator === "Update") {
            let updateitem = await inquirer.prompt([
                {
                    name: "index",
                    type: "input",
                    message: chalk.greenBright.underline("Enter the index of the item you want to update:")
                },
            ]);
            let updateValue = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: chalk.bgBlueBright.bold("Enter the new value of this item:")
                }
            ]);
            todos[Number(updateitem.index)] = updateValue.todo;
            console.log("Todos Updated:", todos);
        }
        else if (opertion.operator === "Delete") {
            let deleteitem = await inquirer.prompt([
                {
                    name: "index",
                    type: "input",
                    message: chalk.bgRedBright.italic("Enter the index of the item you want to delete:")
                }
            ]);
            todos.splice(Number(deleteitem.index), 1);
            console.log("Todo deleted:", todos);
        }
        else if (opertion.operator === "Exit") {
            condition = false;
            console.log(chalk.bgMagentaBright("Existing todo list....."));
        }
    }
}
createtodo();
