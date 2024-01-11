import inquirer from 'inquirer';

const computerGeneratedNo = Math.floor(Math.random() * 10);

type ansType = {
    userGuess: number
}

const answers: ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10:"
    }
])

const {userGuess} = answers;
console.log(userGuess, "userGuess", computerGeneratedNo, "computerGeneratedNo")

if(userGuess === computerGeneratedNo){
    console.log("Congratulation your answer is correct!!\n You Win!!")
} else{
    console.log("Please try Again! Better Next time!!")
}