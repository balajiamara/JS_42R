let order=document.querySelector('#order');
let veg=document.getElementById('Veg');
let Nveg=document.querySelector('#NVeg');
let vmenu=['PANEER BIRYANI','MUSHROOM BIRYANI','PANEER MUGHALAI','SPECIAL VEG BIRYANI','MIXED VEG BIRYANI']
let nvmenu=['CHICKEN DUM BIRYANI','PRAWN BIRYANI','CHICKEN MUGHALAI','MUTTON BIRYANI','MIXED BIRYANI']
let orderedItems=[];

function orderNow(){
    container1.style.display='none';
    document.getElementById('menu').style.display='block';

}
function Veg(){
    veg.style.display='none'
    Nveg.style.display='none'
    // document.getElementById('vmenu').style.display='block';

    const vmenudiv=document.getElementById('vmenu');
    const nvmenudiv = document.getElementById('nvmenu');

    nvmenudiv.style.display='none';
    nvmenudiv.innerHTML='';

    vmenudiv.style.display='block';
    vmenudiv.innerHTML='';

    const vegItems=[...vmenu];
    vegItems.forEach(item=>{
        const btn=document.createElement('button');
        btn.classList='vbtn';
        btn.innerText=item;
        btn.onclick=()=>addToOrder(item);
        vmenudiv.appendChild(btn);
    });
    const switchBtn = document.createElement('button');
    switchBtn.innerText = 'Go to Non-Veg Menu';
    switchBtn.className = 'switch-btn';
    switchBtn.onclick = NonVeg;
    vmenudiv.appendChild(document.createElement('br'));
    vmenudiv.appendChild(switchBtn);
}

function NonVeg(){
    Nveg.style.display='none'
    veg.style.display='none'
    document.getElementById('nvmenu').style.display='block';
    const nvmenudiv=document.getElementById('nvmenu');
    const vmenudiv=document.getElementById('vmenu')

    vmenudiv.style.display='none';
    vmenudiv.innerHTML='';

    nvmenudiv.style.display='block';
    nvmenudiv.innerHTML='';


    const nvegItems=[...nvmenu];
    nvegItems.forEach(item=>{
        const nbtn=document.createElement('button');
        nbtn.classList='nvbtn';
        nbtn.innerText=item;
        nbtn.onclick=()=>addToOrder(item);
        nvmenudiv.appendChild(nbtn)
    });

    const switchBtn = document.createElement('button');
    switchBtn.innerText = 'Go to Veg Menu';
    switchBtn.className = 'switch-btn';
    switchBtn.onclick = Veg;
    nvmenudiv.appendChild(document.createElement('br'));
    nvmenudiv.appendChild(switchBtn);

}

function addToOrder(...items){
        orderedItems.push(...items);
        updateOrderDisplay();
    }

    function updateOrderDisplay(){
        const odiv=document.getElementById('orderr');
        odiv.innerHTML=orderedItems.length>0?orderedItems.map(item=>`<div>${item}</div>`).join(''):'No items ordered yet ';
    }

function placeFinalOrd(){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('placeOrdBtn').style.display = 'none';

    const finalDiv=document.getElementById('finalOrder');

    finalDiv.style.display = 'block';

    if (orderedItems.length>0){
        finalDiv.innerHTML=`
        <h3> Your Final Order:</h3>
        <ul>${orderedItems.map(item=>`<li>${item}</li>`).join('')}</ul>
        <h3> Thanks for Ordering!</h3>
        <h2>May your plate be full and your heart even fuller — until we spice it up again!</h2>
        `;
    }else{
        finalDiv.innerHTML=`<h4>No items were Selected.</h4>`;
    }
}
