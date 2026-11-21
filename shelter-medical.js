function searchMedical() 
{
    let searchTerm = document.getElementById("searchAnimal").value.trim();

    if (searchTerm === "") 
    {
        alert("Error: You must enter a valid Animal Name or ID to search.");
        return false;
    }

    let table = document.getElementById("medicalTable");
    let rows = table.querySelectorAll("tbody tr");
    
    let found = false;

    for (let i = 0; i < rows.length; i++) 
    {
        rows[i].style.backgroundColor = "";
        rows[i].style.fontWeight = "";

        let animalCellText = rows[i].cells[1].textContent;

        if (animalCellText.toLowerCase().includes(searchTerm.toLowerCase())) 
        {
            rows[i].style.backgroundColor = "#fff3cd";
            rows[i].style.fontWeight = "bold";
            rows[i].style.color = "#2c3e50";
            found = true;
        }
    }

    if (found === false) 
    {
        alert("No medical records found for: " + searchTerm);
    }

    return false;
}