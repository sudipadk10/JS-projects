function displayText(){
    let message = document.getElementById("senderInput").value;
    
    if(message != ""){
        let output = document.querySelector("#chat1")
    output.innerHTML += `<div class="msg"><div class="message">${message}</div></div>`;
   
    let encryptedMessage = encrypt(message)
    displayHacker(encryptedMessage);
    let decryptedMessage = decrypt(encryptedMessage)
    displayReciever(decryptedMessage);
    
    document.getElementById("senderInput").value = "";
    }
    console.log(output);
}
document.getElementById("senderInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) { // Enter key (without Shift)
        event.preventDefault(); // Prevents new line in input
        displayText(); // Call send function
    }
});
function displayText2() {
    let message = document.getElementById("recieverInput").value;
    if(message != ""){
        let output = document.querySelector("#chat3")
        output.innerHTML += `<div class="msg"><div class="message">${message}</div></div>`;
        document.getElementById("recieverInput").value = "";
        let decryptedMessage = decrypt(message)
    displayHacker2(decryptedMessage);
    let encryptedMessage = encrypt(decryptedMessage)
        displaySender(encryptedMessage);
    }
}

document.getElementById("recieverInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) { // Enter key (without Shift)
        event.preventDefault(); // Prevents new line in input
        displayText2(); // Call send function
    }
});

// Encrypt function (Bitwise XOR with keys)
function encrypt(message) {
    let n1 = parseInt(document.getElementById("0").value);
    let n2 = parseInt(document.getElementById("1").value);
    let n3 = parseInt(document.getElementById("2").value);

    let keys = [n1, n2, n3];
    
    // If all keys are 0, return the original message
    if (keys.every(key => key === 0)) {
        return message;
    }

    let encryptedText = "";
    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        let encryptedChar = charCode ^ keys[i % 3]; // XOR with cyclic keys
        encryptedText += String.fromCharCode(encryptedChar);
    }
    
    return encryptedText;
}

// Decrypt function (Bitwise XOR with same keys)
function decrypt(encryptedMessage) {
    let n1 = parseInt(document.getElementById("00").value);
    let n2 = parseInt(document.getElementById("11").value);
    let n3 = parseInt(document.getElementById("22").value);

    let keys = [n1, n2, n3];
    
    // If all keys are 0, return the original encrypted message (unchanged)
    if (keys.every(key => key === 0)) {
        return encryptedMessage;
    }

    let decryptedText = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
        let charCode = encryptedMessage.charCodeAt(i);
        let decryptedChar = charCode ^ keys[i % 3]; // XOR with cyclic keys
        decryptedText += String.fromCharCode(decryptedChar);
    }
    
    return decryptedText;
}


function displayHacker(encryptedMessage) {
    let output = document.querySelector("#chat2")
    output.innerHTML += `<div class='msg'><div class="message">${encryptedMessage}</div></div>`;
    
}

function displayHacker2(encryptedMessage) {
    let output = document.querySelector("#chat2")
    output.innerHTML += `<div class='msg2'><div class="message2">${encryptedMessage}</div></div>`;
    
}
function displayReciever(message) {
   
        let output = document.querySelector("#chat3")
    output.innerHTML += `<div class='msg2'><div class="message2">${message}</div></div>`;
    
}
function displaySender(message) {
   
    let output = document.querySelector("#chat1")
output.innerHTML += `<div class='msg2'><div class="message2">${message}</div></div>`;

}