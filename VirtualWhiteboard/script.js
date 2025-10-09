
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
let drawing=false, erasing=false;
let color=document.getElementById("color").value;
let size=document.getElementById("size").value;
let history=[], redoStack=[];

function saveState() {
    history.push(canvas.toDataURL());
    if(history.length>50) history.shift();
    redoStack = [];
}

function startDraw(e){
    drawing=true;
    ctx.beginPath();
    ctx.moveTo(getX(e),getY(e));
    saveState();
}
function draw(e){
    if(!drawing) return;
    ctx.lineWidth=size;
    ctx.lineCap="round";
    ctx.strokeStyle=erasing ? "#fff" : color;
    ctx.lineTo(getX(e),getY(e));
    ctx.stroke();
}
function stopDraw(){ drawing=false; }

function getX(e){ return e.clientX - canvas.offsetLeft; }
function getY(e){ return e.clientY - canvas.offsetTop; }

document.getElementById("color").oninput=e=>{ color=e.target.value; erasing=false; };
document.getElementById("size").oninput=e=>size=e.target.value;
document.getElementById("eraser").onclick=()=>erasing=!erasing;
document.getElementById("undo").onclick=()=>{
    if(history.length>0){
    redoStack.push(history.pop());
    let img=new Image();
    img.src=history[history.length-1] || "";
    img.onload=()=>ctx.drawImage(img,0,0,canvas.width,canvas.height);
    if(history.length===0) ctx.clearRect(0,0,canvas.width,canvas.height);
    }
};
document.getElementById("redo").onclick=()=>{
    if(redoStack.length>0){
    const state=redoStack.pop();
    history.push(state);
    let img=new Image();
    img.src=state;
    img.onload=()=>ctx.drawImage(img,0,0,canvas.width,canvas.height);
    }
};
document.getElementById("clear").onclick=()=>{ ctx.clearRect(0,0,canvas.width,canvas.height); saveState(); };
document.getElementById("save").onclick=()=>{
    const link=document.createElement("a");
    link.download="whiteboard.png";
    link.href=canvas.toDataURL();
    link.click();
};

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseout", stopDraw);

// touch support
canvas.addEventListener("touchstart", e=>startDraw(e.touches[0]));
canvas.addEventListener("touchmove", e=>{ draw(e.touches[0]); e.preventDefault(); });
canvas.addEventListener("touchend", stopDraw);

saveState();