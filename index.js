const Default_user = "CPEadmin"
const Default_pass = "1234"


const btnLayout = document.querySelector('.btn-layout');
const btnLogin1 = document.querySelector('.btn-login-1');
const btnLogin2 = document.querySelector('.btn-login-2');
const btnLogin3 = document.querySelector('.btn-login-3');
const btnLogin4 = document.querySelector('.btn-login-4');


let angry = 0 ;
let removedButtons = [];

let isLogin = true ;
let isRegister = false ;
let isConfirm = false ;
let isCancel = false ;


let user_pass_list = []




function removeBtn(btn1,btn2){
    removedButtons.push(btn2);
    removedButtons.push(btn1);
    btnLayout.removeChild(btn2);
    btnLayout.removeChild(btn1);
}

function swapBtn(btn1,btn2) {
    let tmp = [] ;
    for(let i = 0 ; removedButtons.length > 0 ; i += 1){
        tmp.push(removedButtons.shift())
    }
    removeBtn(btn1,btn2)
    for(let i = 0 ; tmp.length > 0 ; i += 1){
        btnLayout.appendChild(tmp.pop());
    }
}


function trigger_animation(id){
    document.getElementById(id).animate(
        [
            {transform: 'rotate(0deg)'},
            {transform: 'rotate(5deg)'},
            {transform: 'rotate(-5deg)'},
            {transform: 'rotate(0deg)'}  
        ],  {duration : 100 }
    )
}

function event_login() {
    if(isRegister){
        document.getElementById("head-title").innerHTML = "LOGIN" ;
        isRegister = false ;
        isLogin = true ;
        trigger_animation("head-title");
    }
    const user = document.getElementById("Username");
    const pass = document.getElementById("Password");
    let tmp_user = "" , tmp_pass = "" ;
    tmp_user = user.value ;
    tmp_pass = pass.value ;
    if(tmp_user === Default_user && tmp_pass === Default_pass){
        alert("password Corrected!!")
    }
    else{
        trigger_animation("meme-1");
        document.getElementById("meme-1").style.scale = angry + 1 ;
        angry += 0.1 ;
    }
    for(let i = 0 ; i < user_pass_list.length ; i += 1){
        if(user_pass_list[i].user === user.value && user_pass_list[i].pass === pass.value){
            alert("password Corrected!!");
            break ;
        }else{
            trigger_animation("meme-1")
            document.getElementById("meme-1").style.scale = angry + 1 ;
            angry += 0.1 ;
            alert("password incorrect!!");
            break ;
        }
    }
    user.value = "" , pass.value = "" ;
}

function event_Register() {
    const user = document.getElementById('Username') ;
    const pass = document.getElementById('Password') ;
    user.value = "" , pass.value = "";
    if(isLogin){
        document.getElementById("head-title").innerHTML = "Register"
        isRegister = true ;
        isLogin = false ;
        trigger_animation("head-title");
        swapBtn(btnLogin1,btnLogin2);
    }
}

function event_Cancel() {
    const user = document.getElementById('Username') ;
    const pass = document.getElementById('Password') ;
    user.value = "" , pass.value = "";
    if(isRegister){
        document.getElementById("head-title").innerHTML = "LOGIN" ;
        isRegister = false ;
        isLogin = true ;
        trigger_animation("head-title");
        swapBtn(btnLogin3,btnLogin4);
    }
}

function event_Confirm() {
    const user = document.getElementById('Username') ;
    const pass = document.getElementById('Password') ;
    let usRegis = {}
    let isRepeated = false ;
    if(isRegister){
        document.getElementById("head-title").innerHTML = "LOGIN" ;
        isRegister = false ;
        isLogin = true ;
        trigger_animation("head-title");
        swapBtn(btnLogin3,btnLogin4);
        if(user.value === "" || pass.value === ""){
            confirm('please do something?')
        }
        else{
            usRegis.user = user.value ;
            usRegis.pass = pass.value ;
            user_pass_list.forEach((obj) => {
                obj.user === user.value ? isRepeated = true : isRepeated = false ;  
            })
            user.value = "" , pass.value = "";
            if(isRepeated){
                alert("this username has been used");
            }else{
                user_pass_list.push(usRegis) ;
                alert('username saved');
            }
        }
    }
}

removeBtn(btnLogin3,btnLogin4);