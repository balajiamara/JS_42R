const wrapper=document.querySelector('.wrapper'),
    toast=wrapper.querySelector('.toast'),
    wifiIcon=wrapper.querySelector('.icon'),
    title=wrapper.querySelector('span'),
    subTitle=wrapper.querySelector('p')
    closeIcon = wrapper.querySelector(".close-icon");

window.onload = ()=>{
    function ajax(){
        let xhr=new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts',true);
        xhr.onload = () =>{
            // console.log(xhr.response);
            if (xhr.status == 200 && xhr.status<300){
                // console.log('online')
                toast.classList.remove('offline'),
                wifiIcon.innerHTML='<i class="uil uil-wifi"></i>',
                title.innertext="You're online now",
                subTitle.innertext='Hurray! Internet is connected.';
                closeIcon.onclick=()=>{
                    wrapper.classList.add('hide');
                }
                setTimeout(()=>{
                    wrapper.classList.add('hide')
                },5000);
            }
            else{
                // console.log('offline')
                offline()
            }
        }
        xhr.onerror = () =>{
            // offline()
            // console.log('error')
            offline();
        }
        xhr.send()
    }
    function offline(){
        wrapper.classList.remove("hide");
        toast.classList.add('offline'),
        wifiIcon.innerHTML='<i class="uil uil-wifi-slash"></i>',
        title.innertext="You're Offline now",
        subTitle.innertext='OOPS! No Internet Connection';
    }
    // ajax();
    setInterval(()=>{
        ajax();
    },100);

};