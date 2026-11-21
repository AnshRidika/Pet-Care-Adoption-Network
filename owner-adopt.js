function validateApplication() 
{
    let name = document.getElementById("appName").value.trim();
    let phone = document.getElementById("appPhone").value.trim();
    let address = document.getElementById("appAddress").value.trim();
    let reason = document.getElementById("appReason").value.trim();

    if (name === "") 
    {
        alert("Error: Please enter your Full Name.");
        return false;
    }

    if (phone === "") 
    {
        alert("Error: Please enter your Phone Number.");
        return false;
    }
    
    if (phone.length !== 11) 
    {
        alert("Error: Phone number must be exactly 11 digits.");
        return false;
    }

    if (address === "") 
    {
        alert("Error: Please enter your Full Address.");
        return false;
    }

    if (reason === "") 
    {
        alert("Error: Please tell us why you want to adopt.");
        return false;
    }

    if (reason.length < 15) 
    {
        alert("Error: Please provide a bit more detail in the 'Why do you want to adopt?' section.");
        return false;
    }

    alert("Success! Your adoption application for " + name + " has been submitted. The shelter will contact you soon.");
    
    window.location.href = "public.html";
    return false; 
}