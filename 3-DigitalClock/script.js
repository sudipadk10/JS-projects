const time = document.getElementById('clock')

setInterval(()=>{  //runs in every 1 second (1000 ms) interval until we close the program
    const t = new Date()
    time.innerHTML = `<span>${t.toLocaleTimeString()}</span>`
    
},1000)  
