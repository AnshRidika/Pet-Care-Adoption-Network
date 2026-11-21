function validateLostPet() 
{
    let name = document.getElementById("petName").value;
    let location = document.getElementById("lostLocation").value;
    let phone = document.getElementById("contactNumber").value;

    if (name === "" || location === "" || phone === "") 
    {
        alert("Error: Please fill out all required fields.");
        return false;
    }

    if (phone.length !== 11) 
    {
        alert("Error: Contact number must be exactly 11 digits.");
        return false;
    }

    alert("Success! Your Lost Pet Alert has been posted to the public board.");
    window.location.href = "owner-lost.html";
    return false;
}

function validateAdopt() 
{
    let name = document.getElementById("petName").value;
    let breed = document.getElementById("petBreed").value;
    let reason = document.getElementById("rehomeReason").value;

    if (name === "" || breed === "" || reason === "") {
        alert("Error: Please fill out all required fields.");
        return false;
    }

    if (reason.length < 20) 
    {
        alert("Error: Please provide a more detailed reason for rehoming.");
        return false;
    }

    alert("Success! Your pet listing has been published.");
    window.location.href = "owner-rehome.html";
    return false;
}