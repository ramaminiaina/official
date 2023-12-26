
function sendMail(){

    var contactName = document.getElementById("contactName").value;
    var contactEmail = document.getElementById("contactEmail").value;
    var contactSubject = document.getElementById("contactSubject").value;
    var contactMessage = document.getElementById("contactMessage").value;

    const success = document.getElementById('success');
	const danger = document.getElementById('danger');
    const messageDiv = document.querySelector('.message');

    if (contactName==="" || contactEmail==="" || contactSubject==="" || contactMessage===""){
        
        // Display the danger message and stop the function execution
        danger.style.display = "block";
        success.style.display = "none";
        messageDiv.style.display = "block";
        
        // Hide the danger message after 5 seconds
        setTimeout(function() {
            danger.style.display = "none";
            messageDiv.style.display = "none";
        }, 5000);

        return;
    }

    var params =  {
    contactName: contactName,
    contactEmail: contactEmail,
    contactSubject: contactSubject,
    contactMessage: contactMessage,
    };

    var serviceID = "service_4q7ti6k"; // Email service ID
    var templateID = "template_po8gj1f"; // Email templage ID

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {

    console.log(res);

    // Display the success message
    success.style.display = "block";
    danger.style.display = "none";
    messageDiv.style.display = "block";

    // Hide the success message after 5 seconds
    setTimeout(function () {
    success.style.display = "none";
    messageDiv.style.display = "none";

    // Clear input fields after successful email sending
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactSubject").value = "";
    document.getElementById("contactMessage").value = "";
    
    }, 5000);

    })

    .catch((err) => {

        // Display the danger message in case of an error
        danger.style.display = "block";
        success.style.display = "none";
        messageDiv.style.display = "block";
        console.log(err);
    });
}
