function validateAnimal() 
{
    let animalName = document.getElementById("animalName").value;
    let animalBreed = document.getElementById("animalBreed").value;
    let animalAge = document.getElementById("animalAge").value;
    let animalPhoto = document.getElementById("animalPhoto").value;
    
    let genderMale = document.getElementById("genderMale").checked;
    let genderFemale = document.getElementById("genderFemale").checked;

    if (animalName === "") 
    {
        alert("Error: Animal Name must be filled out.");
        return false;
    }

    if (animalBreed === "") 
    {
        alert("Error: Breed must be filled out.");
        return false;
    }

    if (animalAge === "" || Number(animalAge) < 0) 
    {
        alert("Error: Please enter a valid Age (0 or greater).");
        return false;
    }

    if (!genderMale && !genderFemale) 
    {
        alert("Error: Please select a Gender for the animal.");
        return false;
    }

    if (animalPhoto === "") 
    {
        alert("Error: Please upload an Animal Photo.");
        return false;
    }

    alert("Success! " + animalName + " has been registered to the shelter.");

    window.location.href = "shelter-dashboard.html";

    return false; 
}