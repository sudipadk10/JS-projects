function displayText(){
    let message = document.getElementById("textInput").value;
    
    if(message != ""){
        let output = document.querySelector("#chat1")
    output.innerHTML += `<div class="message">${message}</div>`;
    document.getElementById("textInput").value = "";
    }
    console.log(output);
}
document.getElementById("textInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) { // Enter key (without Shift)
        event.preventDefault(); // Prevents new line in input
        displayText(); // Call send function
    }
});