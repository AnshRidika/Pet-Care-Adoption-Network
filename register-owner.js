function validateOwner() 
{
    let name = document.getElementById("ownerName").value;
    let phone = document.getElementById("ownerPhone").value;
    let email = document.getElementById("ownerEmail").value;
    let password = document.getElementById("ownerPassword").value;
    let cleanName = name.trim();

    if (name === "" || phone === "" || password === "") 
    {
        alert("Error: Please fill out all required fields.");
        return false;
    }
    if (cleanName === "") 
    {
        alert("Error: Name cannot be empty or just spaces.");
        return false;
    }

    if (!/^[A-Za-z\s]+$/.test(cleanName)) 
    {
        alert("Error: Name must contain only letters and spaces.");
        return false;
    }

    if (phone.length !== 11) 
    {
        alert("Error: Phone number must be exactly 11 digits.");
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

    alert("Success! Pet Owner account created. Redirecting to login...");
    window.location.href = "index.html";
    return false;
}