function validateFoster() 
{
    let fosterName = document.getElementById("fosterName").value;
    let fosterLocation = document.getElementById("fosterLocation").value;

    if (fosterName === "") 
    {
        alert("Error: Please enter the Foster Family Name.");
        return false;
    }

    if (fosterLocation === "") 
    {
        alert("Error: Please enter the Location for the foster home.");
        return false;
    }

    if (fosterName.length < 3) 
    {
        alert("Error: Foster Family Name must be at least 3 characters long.");
        return false;
    }

    alert("Success! The animal has been successfully assigned to " + fosterName + " in " + fosterLocation + ".");

    window.location.href = "shelter-foster.html";
    
    return false; 
}