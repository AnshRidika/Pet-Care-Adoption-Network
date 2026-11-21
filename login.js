function validateLogin() 
{
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;
    let role = document.getElementById("userRole").value;

    if (email === "") 
    {
        alert("Error: Email cannot be empty.");
        return false;
    }

    if (password === "") 
    {
        alert("Error: Password cannot be empty.");
        return false;
    }

    if (role === "") 
    {
        alert("Error: Please select a role from the dropdown.");
        return false;
    }
     if (!email.includes("@")) 
    {
        alert("Error: Please enter a valid email address (must contain @).");
        return false;
    }
    if (password.length < 8) 
    {
        alert("Error: Password must be at least 8 characters long.");
        return false;
    }
     if (/[A-Z]/.test(password)==false) 
    {
        alert("Error: Password must contain at least 1 capital letter.");
        return false;
    }
     if (/[a-z]/.test(password)==false) 
    {
        alert("Error: Password must contain at least 1 small letter.");
        return false;
    }
     if (/[^A-Za-z0-9]/.test(password)==false) 
    {
        alert("Error: Password must contain at least 1 special character.");
        return false;
    }
    if (role === "owner") 
    {
        window.location.href = "owner-dashboard.html";
    } else if (role === "vet") 
    {
        window.location.href = "vet-dashboard.html";
    } else if (role === "shelter")
    {
        window.location.href = "shelter-dashboard.html";
    } else if (role === "manager") 
    {
        window.location.href = "manager-dashboard.html";
    }

    return false; 
}