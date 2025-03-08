function displayText(){
    let message = document.getElementById("senderInput").value;
    
    if(message != ""){
        let output = document.querySelector("#chat1")
    output.innerHTML += `<div class="message">${message}</div>`;
    displayReciever(message);
    document.getElementById("senderInput").value = "";
    }
    console.log(output);
}
document.getElementById("senderInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) { // Enter key (without Shift)
        event.preventDefault(); // Prevents new line in input
        displayText(); // Call send function
    }
    console.log(getElementByClass("message-box"));
});

function displayReciever(message) {
   
        let output = document.querySelector("#chat3")
    output.innerHTML += `<div class="message2">${message}</div>`;
    
}