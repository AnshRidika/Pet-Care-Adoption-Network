function validateMessage() 
{
    let recipient = document.getElementById("messageTo").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let messageBody = document.getElementById("messageBody").value.trim();

    if (recipient === "") 
    {
        alert("Error: Please select or type who you want to send the message to.");
        return false;
    }

    if (subject === "") 
    {
        alert("Error: Please enter a Subject for your message.");
        return false;
    }

    if (messageBody === "") 
    {
        alert("Error: Please write your message before sending.");
        return false;
    }

    if (subject.length < 3) 
    {
        alert("Error: The subject is too short. Please enter a valid subject.");
        return false;
    }

    if (messageBody.length < 10) 
    {
        alert("Error: The message is too short. Please write a proper message.");
        return false;
    }

    alert("Success! Your message has been sent to " + recipient + ".");
    
    window.location.href = "vet-messages.html";
    return false; 
}