function validateShelter() 
{
    let orgName = document.getElementById("shelterName").value;
    let email = document.getElementById("shelterEmail").value;
    let password = document.getElementById("shelterPassword").value;

    if (orgName === "" || email === "" || password === "") 
    {
        alert("Error: Please fill out all required fields.");
        return false;
    }

    if (!email.includes("@")) 
    {
        alert("Error: Please enter a valid email address (must contain @).");
        return false;
    }

    if (password.length < 8) 
    {
        alert("Error: Password must be at least 6 characters long.");
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

    alert("Success! Shelter application submitted. Redirecting to login...");
    window.location.href = "index.html";
    return false;
}