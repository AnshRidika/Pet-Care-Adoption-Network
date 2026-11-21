function searchPatients() 
{
    let searchTerm = document.getElementById("searchPatient").value.trim().toLowerCase();
    let filter = document.getElementById("filterSpecies").value;

    if (searchTerm === "") 
    {
        alert("Error: Please enter a Pet Name or Owner Name to search.");
        return false;
    }

    let table = document.getElementById("recentPatientsTable");
    let rows = table.querySelectorAll("tbody tr");
    
    let foundMatch = false;

    for (let i = 0; i < rows.length; i++) 
    {
        rows[i].style.backgroundColor = "";
        rows[i].style.fontWeight = "";
    }

    for (let i = 0; i < rows.length; i++) 
    {
        let petName = rows[i].cells[0].textContent.toLowerCase();
        let speciesText = rows[i].cells[1].textContent.toLowerCase();
        let ownerName = rows[i].cells[2].textContent.toLowerCase();

        if (petName.includes(searchTerm) || ownerName.includes(searchTerm)) 
        {
            let isDog = speciesText.includes("dog");
            let isCat = speciesText.includes("cat");
            let speciesValid = false;

            if (filter === "all") 
            {
                speciesValid = true;
            } 
            else if (filter === "dog" && isDog) 
            {
                speciesValid = true;
            } 
            else if (filter === "cat" && isCat) 
            {
                speciesValid = true;
            } 
            else if (filter === "other" && !isDog && !isCat) 
            {
                speciesValid = true;
            }

            if (speciesValid === true) 
            {
                rows[i].style.backgroundColor = "#fff3cd";
                rows[i].style.fontWeight = "bold";
                foundMatch = true;
            } 
            else 
            {
                if (filter === "dog") 
                {
                    alert("Error: There is no dog for that name.");
                } 
                else if (filter === "cat") 
                {
                    alert("Error: There is no cat for that name.");
                }
                return false;
            }
        }
    }

    if (foundMatch === false) 
    {
        alert("No records found for: " + searchTerm);
    }
    
    return false; 
}