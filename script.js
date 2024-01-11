function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
}

const serviceID = "service_biyaerp"
const templateID = "template_zfntlo3"

emailjs.send("service_biyaerp","template_zfntlo3","params")
.then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent");

    })
    .catch((err)=>console.log(err));

   