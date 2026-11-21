function validateBroadcast() 
{
    let message = document.getElementById("alertMessage").value;

    if (message === "") 
    {
        alert("Error: Please type the urgent message before sending.");
        return false;
    }

    if (message.length < 10) 
    {
        alert("Error: The message is too short. Please provide more details.");
        return false;
    }

    alert("Success! Broadcast Alert sent to all users.");
    window.location.href = "manager-broadcast.html";
    return false;
}