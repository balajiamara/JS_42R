let user_input=document.getElementById('input')
let sentence_ele=document.getElementById('sentence')
let value=sentence_ele.textContent

// Wrap characters in spans
sentence_ele.innerHTML=value.split('').map(e=>`<span>${e}</span>`).join('')
    let chr_elements=document.querySelectorAll('span');

    let timeLeft=60;
    let timerDisplay=document.createElement('div');
    timerDisplay.id='timer';
    document.body.insertBefore(timerDisplay,user_input);

    let timer=null;
    function startTimerOnce(){
        if(!timer){
            timer=setInterval(()=>{
                timeLeft--;
                timerDisplay.textContent=`Time Left:${timeLeft}s`;

                if(timeLeft<=0){
                    clearInterval(timer);
                    user_input.disabled=true;
                    user_input.value='';
                    timerDisplay.textContent="⏳ Time's up!"
                }
            },1000);
        }
        user_input.removeEventListener('keydown',startTimerOnce);
    }
    user_input.addEventListener('keydown',startTimerOnce);

    user_input.addEventListener('input',function(){
        for(let i=0; i<user_input.value.length;i++){
        if(user_input.value[i]==chr_elements[i].textContent){
            chr_elements[i].style.color='white'
        }else{
            chr_elements[i].style.color='red'
        }
    }
    for(let i=user_input.value.length;i<chr_elements.length;i++){
        chr_elements[i].style.color='black'
    }
    })