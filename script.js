let imgBox = document.querySelector("#imgBox");
let qrimage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");


function generateQR(){
    if(qrText.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        }, 1000);
    }
    
}