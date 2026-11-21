function approveUser(name) 
{
    let confirmApprove = confirm("Are you sure you want to approve " + name + "?");
    
    if (confirmApprove === true) 
    {
        alert("Success! " + name + " has been verified and approved.");
        
    }
}

function rejectUser(name) 
{
    let confirmReject = confirm("Are you sure you want to reject " + name + "?");
    
    if (confirmReject === true) {
        alert("Rejected: " + name + "'s application has been rejected.");
    }
}