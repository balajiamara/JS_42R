function submit(){
    let userName=document.getElementById('name').value
    let u_name=document.getElementById('name').value
    let u_password=document.getElementById('password').value
    if(u_name == ''){
        document.getElementById('msg').textContent=`Please Enter User Name`
    }else if(u_password == ''){
        document.getElementById('msg').textContent=`Please Enter Your Password`
    }else{
        document.getElementById('msg').textContent=`${userName} Your Account is Verifying`
    }
}