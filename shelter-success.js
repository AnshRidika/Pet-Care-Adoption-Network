function validateStory() 
{
    let petName = document.getElementById("storyPetName").value.trim();
    let breed = document.getElementById("storyBreed").value.trim();
    let adopter = document.getElementById("storyAdopter").value.trim();
    let date = document.getElementById("date").value;
    let quote = document.getElementById("storyQuote").value.trim();
    let photo = document.getElementById("storyPhoto").value;

    if (petName === "" || breed === "" || adopter === "" || date === "" || quote === "") 
    {
        alert("Error: Please fill out all fields in the Success Story form.");
        return false;
    }

    if (photo === "") 
    {
        alert("Error: Please upload a photo for the success story.");
        return false;
    }

    alert("Success! The story of " + petName + " has been published.");

    window.location.href = "shelter-success.html";
    return false; 
}


function validateMessage() 
{
    let recipient = document.getElementById("messageTo").value.trim();
    let messageBody = document.getElementById("messageBody").value.trim();

    if (recipient === "") 
    {
        alert("Error: Please select or type who you want to send the message to.");
        return false;
    }

    if (messageBody === "") 
    {
        alert("Error: Please write your message before sending.");
        return false;
    }

    alert("Success! Your message has been sent to " + recipient + ".");
    
    window.location.href = "shelter-success.html";
    return false; 
}