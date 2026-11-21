function validatePrice() 
{
    let service = document.getElementById("editServiceName").value;
    let newPrice = document.getElementById("editServicePrice").value;

    if (newPrice === "") 
    {
        alert("Error: Please enter a new price.");
        return false;
    }

    if (Number(newPrice) < 0) 
    {
        alert("Error: Price cannot be a negative number.");
        return false;
    }

    let currentPrice = 0;
    
    if (service === "checkup") 
    {
        currentPrice = 500;
    } 
    else if (service === "vaccination") 
    {
        currentPrice = 800;
    } 
    else if (service === "deworming") 
    {
        currentPrice = 300;
    } 
    else if (service === "surgery") 
    {
        currentPrice = 2500;
    }

    if (Number(newPrice) === currentPrice) 
    {
        alert("Error: You cannot enter the same value for the same service again. Please enter a new price.");
        return false;
    }

    alert("Success! The price for the selected service has been updated to ৳" + newPrice + ".");
    
    window.location.href = "vet-services.html";
    
    return false; 
}