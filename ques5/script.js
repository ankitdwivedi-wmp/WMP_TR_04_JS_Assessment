let userInput=prompt('Enter a number between 1 to 10 :')
let randomNumber=Math.floor(Math.random()*10);
//Check for the conditions

if(userInput == randomNumber){
    alert('Good Work');
    
}
else{
    alert('Not matched');
    
}
