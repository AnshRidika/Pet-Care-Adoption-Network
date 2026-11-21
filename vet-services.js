function validateService() 
{
    let serviceName = document.getElementById("serviceName").value.trim();
    let servicePrice = document.getElementById("servicePrice").value;

    if (serviceName === "") 
    {
        alert("Error: Service Name must be filled out.");
        return false;
    }

    if (servicePrice === "") 
    {
        alert("Error: Service Price must be filled out.");
        return false;
    }

    if (Number(servicePrice) < 0) 
    {
        alert("Error: Price cannot be a negative number.");
        return false;
    }

    let existingServices = ["general checkup", "vaccination", "deworming", "surgery (minor)"];

    if (existingServices.includes(serviceName.toLowerCase())) 
    {
        alert("Error: This service is already added in your list. Please add something else.");
        return false;
    }

    alert("Success! " + serviceName + " has been added to your clinic services.");
    
    window.location.href = "vet-services.html";
    return false; 
}