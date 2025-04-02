let home=document.getElementById('Home');
let header=document.getElementById('header');
let link=document.getElementById('a-tag');
let link1=document.getElementById('a-tag1');
let welcome=document.getElementById('welcome');
let final=new Date(2025,4,23,0,0,0,0)

document.getElementById('poor').style.color="antiquewhite"
setInterval(function(){
    let now=new Date()
    document.getElementById('day').innerHTML=final.getDate()-now.getDate()
    document.getElementById('hr').innerHTML=24+(final.getHours()-now.getHours())
    document.getElementById('min').innerHTML=60+(final.getMinutes()-now.getMinutes())
    document.getElementById('sec').innerHTML=60+(final.getSeconds()-now.getSeconds())
},1)
setInterval(function(){
    document.getElementById('text-25').style.color="black"
},5)
setInterval(function(){
    document.getElementById('text-25').style.color="#FF0000"
},2)

document.getElementById('fi').addEventListener("mouseover",function(){
    document.getElementById('fi').style.color="#fff666"
})
document.getElementById('fi').addEventListener("mouseleave",function(){
    document.getElementById('fi').style.color=""
})
document.getElementById('nf').addEventListener("mouseover",function(){
    document.getElementById('nf').style.color="#fff666"
})
document.getElementById('nf').addEventListener("mouseleave",function(){
    document.getElementById('nf').style.color=""
})
document.getElementById('ac').addEventListener("mouseover",function(){
    document.getElementById('ac').style.color="#fff666"
})
document.getElementById('ac').addEventListener("mouseleave",function(){
    document.getElementById('ac').style.color=""
})
document.getElementById('ch').addEventListener("mouseover",function(){
    document.getElementById('ch').style.color="#fff666"
})
document.getElementById('ch').addEventListener("mouseleave",function(){
    document.getElementById('ch').style.color=""
})


document.getElementById('nf')
document.getElementById('ac')
document.getElementById('ch')

header.addEventListener("mouseover",bgcolor)
header.addEventListener("mouseleave",function() {
    header.style.background="";
    header.style.color="";
        link.style.color="";
        link1.style.color="";

    welcome.style.color="black";


})
var x=0;

function colorchange(){
    home.style.color="black";
    home.style.textDecoration="overline";
    home.style.backgroundColor="black"

}
function colorchange_2(){
    home.style.textDecoration="none";
    home.style.backgroundColor="none"
    home.style.backgroundColor=""

}
function bgcolor(){
    header.style.background="linear-gradient(to bottom, #cc3399 0%, #800000 100%)";
    welcome.style.color="white";
        link.style.color="#D3D3D3";
        link1.style.color="#D3D3D3";

    
}