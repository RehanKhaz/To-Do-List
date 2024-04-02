import inquirer from "inquirer";
console.log(" \n\t Welcome to My TO-DO-LIST PROJECT -- RehanKhan \n");
let todoList = [];
let condition = true;
while (condition) {
    let askTask = await inquirer.prompt({
        name: "task",
        message: "Enter the task",
        type: "input",
    });
    todoList.push(askTask.task);
    console.log(`Your task ${askTask.task} has been added Successfully!`);
    let askMoretask = await inquirer.prompt({
        name: "askMore",
        message: "Do you want to add more task.",
        type: 'confirm',
        default: "False"
    });
    condition = askMoretask.askMore;
}
console.log(`Your Updated todo_List is ${todoList}`);
