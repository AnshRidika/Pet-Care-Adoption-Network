function banUser(name) 
{
    let confirmBan = confirm("WARNING: Are you sure you want to BAN " + name + "? This action is permanent.");
    
    if (confirmBan === true) 
    {
        alert("User " + name + " has been permanently banned from the platform.");
    } 
    else 
    {
        alert("Ban action cancelled.");
    }
}

function dismissReport(name) 
{
    let confirmDismiss = confirm("Are you sure you want to dismiss the report against " + name + "?");
    
    if (confirmDismiss === true) 
    {
        alert("Report against " + name + " has been dismissed.");
    }
}