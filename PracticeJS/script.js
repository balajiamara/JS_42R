// let input = prompt('enter your value:')
// console.log(input)
//   let num = Number(input);   // convert to Number
//   let bool = Boolean(input); // convert to Boolean
//   let str = String(input);   // explicitly String

//   console.log("Original:", input, "→", typeof input);
//   console.log("Number:", num, "→", typeof num);
//   console.log("Boolean:", bool, "→", typeof bool);
//   console.log("String:", str, "→", typeof str);


// let res=Number(input)
// console.log(res+50)
// console.log('5' + 2);
// console.log("5" - 2);
// console.log("5" * "2");
// console.log("10" / true);

// function toBoolean(value) {
//   return !!value;  // double NOT converts to true/false
// }

// console.log(toBoolean(0));        // false
// console.log(toBoolean(1)); 

// console.log(Boolean('0'))

// let a=20
// let b='30'

// console.log(a+b)
// console.log(b+a)

// arr=['subbu','srinu','prem','rammohan','abdul']
// console.log(Math.random(arr)*5)

''

// let randomnumber=Math.random()*100;
// randomnumber=Math.ceil(randomnumber);
// console.log(randomnumber)

// function guess(){
//     let num= document.getElementById('input').value
//     num=parseInt(num);
// if(isNaN(num)){
//     document.getElementById('msg').textContent='Please enter a valid Number'
// }
// else if(num>100 || num<1){
//     document.getElementById('msg').textContent='Please enter a number between 1 and 100 only'
// }
// else if(num===randomnumber){
//     document.getElementById('msg').textContent='you guess the number correctly'
// }
// else if(num>randomnumber){
//     document.getElementById('msg').textContent='your number is too high'
// }
// else{
//     document.getElementById('msg').textContent='your number is too low'
// };
// }




// function increment(){
//     let num=document.getElementById(val).textContent
//     num=parseInt(num)

// }

let output=document.getElementById('output'),
    reult=document.getElementById('equal');

function one(){
    
    if (output.textContent !==''){
        document.getElementById('output').appendChild('1');
        console.log('hello')
    }
    else{
        document.getElementById('output').value='1';
        console.log('hi')
    }
}
function two(){
    document.getElementById('output').textContent=2;
}
function three(){
    document.getElementById('output').textContent=3;
}
function four(){
    document.getElementById('output').textContent=4;
}
function five(){
    document.getElementById('output').textContent=5;
}
function six(){
    document.getElementById('output').textContent=6;
}
function seven(){
    document.getElementById('output').textContent=7;
}
function eight(){
    document.getElementById('output').textContent=8;
}
function nine(){
    document.getElementById('output').textContent=9;
}
function zero(){
    document.getElementById('output').textContent=0;
}
function add(){
    document.getElementById('output').textContent='-';
}
function sub(){
    document.getElementById('output').textContent='-';
}
function mul(){
    document.getElementById('output').textContent='x';
}
function divide(){
    document.getElementById('output').textContent='/';
}
function equal(){
    document.getElementById('output').textContent='';
}