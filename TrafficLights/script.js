// document.getElementById('t1').style.display='none'
// document.getElementById('t2').style.display='none'
// document.getElementById('t3').style.display='none'
function redcolor(){
    document.getElementById('l1').style.backgroundColor='red'
    document.getElementById('l2').style.backgroundColor='black'
    document.getElementById('l3').style.backgroundColor='black'
    document.getElementById('t1').style.display='block'
    document.getElementById('t3').style.display='none'
    document.getElementById('t2').style.display='none'
}
function orangecolor(){
    document.getElementById('l2').style.backgroundColor='orange'
    document.getElementById('l1').style.backgroundColor='black'
    document.getElementById('l3').style.backgroundColor='black'
    document.getElementById('t2').style.display='block'
    document.getElementById('t3').style.display='none'
    document.getElementById('t1').style.display='none'
}
function greencolor(){
    document.getElementById('l3').style.backgroundColor='green'
    document.getElementById('l2').style.backgroundColor='black'
    document.getElementById('l1').style.backgroundColor='black'
    document.getElementById('t3').style.display='block'
    document.getElementById('t2').style.display='none'
    document.getElementById('t1').style.display='none'
}