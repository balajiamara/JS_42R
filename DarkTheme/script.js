let container=document.body
let theme=localStorage.getItem('dark_mode')?'dark_mode':'light_mode'
container.classList=theme
function changeTheme(){
    // document.body.classList='dark_mode'
    // document.body.style.backgroundColor='black'
    // document.body.style.color='white'
    // document.body.classList.toggle('dark_mode')
    if(container.classList=='dark_mode'){
        container.classList='light_mode'
        localStorage.setItem('light_mode','light_mode') //setItem(key,value)
        localStorage.removeItem('dark_mode')
    }
    else{
        container.classList='dark_mode'
        localStorage.setItem('dark_mode','dark_mode')
        localStorage.removeItem('light_mode')
    }
}