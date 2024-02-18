
var x = document.getElementById('img-1');
let i = true ;


function flip(elem){
    if(i){
        elem.style.transform = 'scaleX(-1)';
    }else{
        elem.style.transform = 'scaleX(1)';
    }
    i = !i ;
}

function logout(){
    if(confirm('Logout')){
        window.location.replace('/login/index.html')
    }
}

setInterval(()=>{flip(x)},200);