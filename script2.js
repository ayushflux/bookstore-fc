let home=document.getElementById('Home');
let header=document.getElementById('header');
let link=document.getElementById('a-tag');
let link1=document.getElementById('a-tag1');
let welcome=document.getElementById('welcome');
let submit=document.getElementById('Submit')
let email=document.getElementById('email')
let user=document.getElementById('username')
let pass=document.getElementById('password')
let regi=document.getElementById('register')


regi.addEventListener("mouseover",function(){
    regi.style.color="white"
})
regi.addEventListener("mouseleave",function(){
    regi.style.color=""
})
submit.addEventListener("mouseover",function(){
    submit.style.backgroundColor="#0c51f2"
})
submit.addEventListener("mouseleave",function(){
    submit.style.backgroundColor=""
})
header.addEventListener("mouseover",bgcolor)
header.addEventListener("mouseleave",function() {
    header.style.background="";
    header.style.color="";
    link.style.color="";
    link1.style.color="";
welcome.style.color="black";


})
var x=0;
function Validate(){
    let email=document.getElementById('email')
    let user=document.getElementById('username')
    let pass=document.getElementById('password')

    var t=1
    let reg1=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(!reg1.test(pass.value)){
        alert("Password must atleast 8 characters including a letter & a number")
        t=0
    }
    let reg2=/^\d{10}$/
    if(!reg2.test(user.value)){
        alert("Phone number should be 10 number long")
        t=0
    }
    let reg3=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!reg3.test(email.value)){
        alert("Not a valid Email")
        t=0
    }
    if(t===1){
        alert("Successfully Login")
        submit.style.backgroundColor="#046e2e"
        submit.innerHTML="Success"
        return;
    }
    submit.style.backgroundColor="#6e0404"
    submit.innerHTML="Not Logged In"


}
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