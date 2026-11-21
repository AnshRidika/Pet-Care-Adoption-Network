function removeContent(type) 
{
    let confirmRemove = confirm("Are you sure you want to remove this " + type + "?");
    
    if (confirmRemove === true) 
    {
        alert("Success! The flagged " + type + " has been removed from the platform.");
    }
}

function ignoreFlag() 
{
    alert("Flag ignored. Content remains on the platform.");
}