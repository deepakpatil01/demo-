const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess=="quite"){
        console.log("user quite");
        break;
    }
    if(guess== random){
        console.log("you are right !", random);
        break;
    }else if(guess < random){
     guess = prompt ("hint:your guess was too small. please try again");
    }
    else{
        guess = prompt ("Hint:your guess was too large. please try again");
    }
    
}


function rolldice() {
    let rand = math.floor(math.random() * 6) + 1;
    console.log(rand);
   }
   rolldice();
   rolldice();