function randomColor(){
const hex = '0123456789ABCDEF'
let color = '#' 

for(let i=0;i<6;i++){
    
color += hex[Math.floor(Math.random()*16)]
}
return color;
}

let interval;
document.getElementById('start').addEventListener('click',()=>{
   if(!interval){ 
    interval = setInterval(()=>{
        document.querySelector('body').style.backgroundColor=randomColor()
    },1000)
    console.log('started');
}
})

document.getElementById('stop').addEventListener('click',()=>{
    console.log('stopped');
    clearInterval(interval);
    interval = null;
})

