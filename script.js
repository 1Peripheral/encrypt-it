var textBox = document.getElementById('input-text');
var cipherKey = document.getElementById('key-text');


function Encrypt(){
    let encrypted = CryptoJS.AES.encrypt(textBox.value, cipherKey.value);
    
    textBox.value = encrypted;
}


function Decrypt() {
    let decrypted = CryptoJS.AES.decrypt(textBox.value, cipherKey.value).toString(CryptoJS.enc.Utf8);
    if (decrypted == "")
        decrypted = "Incorrect Key !"
    textBox.value = decrypted;
}


function Clear() {
    let check = document.getElementById('lock-check').checked;
    textBox.value = "";

    if (!check)
        cipherKey.value = ""; 
}