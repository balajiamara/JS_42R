let randomNumber=Math.random()*100
randomNumber=Math.ceil(randomNumber)
function Guess(){
    let curValue=document.getElementById('user_input').value
    curValue=parseInt(curValue)
    console.log(curValue)
    if(isNaN(curValue)){
        document.getElementById('msg').textContent = ' Enter a valid number';
    }else if(curValue>100 || curValue<0){
        document.getElementById('msg').textContent='Enter a Number Between 0 and 100 Only '
    }else if(curValue==randomNumber){
        document.getElementById('msg').textContent='Hurray!! You Guessed the Number Correctly'
    }else if(curValue>randomNumber){
        document.getElementById('msg').textContent='OOPS!!  Your Guessed Number is too High'
    }else if(curValue<randomNumber){
        document.getElementById('msg').textContent='OOPS!!  Your Guessed Number is too Low'
    }
}
