function validateAddPet() 
{
    let name = document.getElementById("petName").value;
    let breed = document.getElementById("petBreed").value;
    let age = document.getElementById("petAge").value;
    let weight = document.getElementById("petWeight").value;

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
    let age = document.getElementById("editAge").value;
    let weight = document.getElementById("editWeight").value;

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