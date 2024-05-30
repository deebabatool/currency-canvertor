import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR:0.93,
    IND: 74.57,
    PKR: 200,
};



let user_answer= await inquirer.prompt(
 [
        {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ['USD','EUR','IND','PKR',]
        },
        {    
        
       name: "to",
      message: "Enter from currency",
       type: "list",
       choices: ['USD','EUR','IND','PKR',]
     },
     {
        name: 'amount',
        message: "Enter your Amount",
        type: 'number',
     },
    ]
)   
     console.log(user_answer);
     

     