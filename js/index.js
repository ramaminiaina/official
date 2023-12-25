
function sendMail(){

    var params =  {
    contactName: document.getElementById("contactName").value,
    contactEmail: document.getElementById("contactEmail").value,
    contactSubject: document.getElementById("contactSubject").value,
    contactMessage: document.getElementById("contactMessage").value,
    };

    var serviceID = "service_4q7ti6k"; // Email service ID
    var templateID = "template_po8gj1f"; // Email templage ID

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactSubject").value = "";
    document.getElementById("contactMessage").value = "";
    console.log(res);
    alert("Email Sent Successfully!");
    })
    .catch((err) => console.log(err));

}
