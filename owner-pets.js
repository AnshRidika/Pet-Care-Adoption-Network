function validateAddPet() 
{
    let name = document.getElementById("petName").value.trim();
    let breed = document.getElementById("petBreed").value.trim();
    let age = document.getElementById("petAge").value.trim();
    let weight = document.getElementById("petWeight").value.trim();

    if (name === "" || breed === "" || age === "" || weight === "") 
    {
        alert("Error: Please fill out all fields.");
        return false;
    }

    if (age < 0 || weight < 0) 
    {
        alert("Error: Age and weight cannot be negative numbers.");
        return false;
    }

    alert("Success! New pet added to your profile.");
    window.location.href = "owner-pets.html";
    return false;
}

function validateEditPet() 
{
    let age = document.getElementById("editAge").value.trim();
    let weight = document.getElementById("editWeight").value.trim();

    if (age === "" || weight === "") 
    {
        alert("Error: Please fill out all fields.");
        return false;
    }

    if (age < 0 || weight < 0) 
    {
        alert("Error: Age and weight cannot be negative numbers.");
        return false;
    }

    alert("Success! Pet details updated.");
    window.location.href = "owner-pets.html";
    return false;
}