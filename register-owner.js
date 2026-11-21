function validateOwner() 
{
    let name = document.getElementById("ownerName").value.trim();
    let email = document.getElementById("ownerEmail").value.trim();
    let phone = document.getElementById("ownerPhone").value.trim();
    let password = document.getElementById("ownerPassword").value;

    if (name === "") 
    {
        alert("Error: Please enter your Full Name.");
        return false;
    }
    
    if (!/^[A-Za-z\s]+$/.test(name)) 
    {
        alert("Error: Name must contain only letters and spaces.");
        return false;
    }

    if (email === "") 
    {
        alert("Error: Please enter your Email Address.");
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) 
    {
        alert("Error: Please enter a valid email address (e.g., name@example.com).");
        return false;
    }

    if (phone === "") 
    {
        alert("Error: Please enter your Phone Number.");
        return false;
    }

    if (phone.length !== 11 || isNaN(phone)) 
    {
        alert("Error: Phone number must be exactly 11 digits.");
        return false;
    }

    if (password === "") 
    {
        alert("Error: Please enter a Password.");
        return false;
    }

    if (password.length < 8) 
    {
        alert("Error: Password must be at least 8 characters long.");
        return false;
    }

    if (!/[A-Z]/.test(password)) 
    {
        alert("Error: Password must contain at least 1 capital letter.");
        return false;
    }

    if (!/[a-z]/.test(password)) 
    {
        alert("Error: Password must contain at least 1 small letter.");
        return false;
    }

    if (!/[^A-Za-z0-9]/.test(password)) 
    {
        alert("Error: Password must contain at least 1 special character (e.g., @, #, $).");
        return false;
    }

    alert("Success! Pet Owner account created. Redirecting to login...");
    window.location.href = "index.html";
    return false; 
}