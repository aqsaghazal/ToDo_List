#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
{
    let addTask = await inquirer.prompt([
        { name: "todo",
          type: "input",
          message: "what do you want to add in your todos list?",
        },
        {
            name: "addMore",
            type: "conforim",
            message: "do you want to add more?",
            default: "yes/no",
        }
    ]);
 todos.push(addTask.todo);
 condition = addTask.addMore
 console.log(todos);   
}