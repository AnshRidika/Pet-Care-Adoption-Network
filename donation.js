function validateDonation() 
{
    let email = document.getElementById("donorEmail").value.trim();
    let amount = document.getElementById("donationAmount").value.trim();
    let name = document.getElementById("donorName").value.trim();
    let isAnonymous = document.getElementById("isAnonymous").checked;

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

    if (amount === "") 
    {
        alert("Error: Please enter the donation amount.");
        return false;
    }

    if (amount < 10) 
    {
        alert("Error: Minimum donation amount is 10 BDT.");
        return false;
    }

    if (isAnonymous === false) 
    {
        if (name === "") 
        {
            alert("Error: Please enter your name, or check the anonymous box.");
            return false;
        }

        if (!/^[A-Za-z\s]+$/.test(name)) 
        {
            alert("Error: Name must contain only letters and spaces (no numbers or symbols).");
            return false;
        }
    }

    alert("Success! Proceeding to SSLCommerz payment gateway...");
    return false;
}