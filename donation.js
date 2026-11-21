function validateDonation() 
{
    let email = document.getElementById("donorEmail").value;
    let amount = document.getElementById("donationAmount").value;
    let name = document.getElementById("donorName").value;
    let isAnonymous = document.getElementById("isAnonymous").checked;  
    let cleanName = name.trim(); 

    if (email.trim() === "" || amount === "") 
    {
        alert("Error: Please fill out all required fields.");
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) 
    {
        alert("Error: Please enter a valid email address (e.g., name@example.com).");
        return false;
    }

    if (amount < 10) 
    {
        alert("Error: Minimum donation amount is 10 BDT.");
        return false;
    }

    if (!isAnonymous) 
    {
        if (cleanName === "") 
        {
            alert("Error: Please enter your name, or check the anonymous box.");
            return false;
        }

        if (!/^[A-Za-z\s]+$/.test(cleanName)) 
        {
            alert("Error: Name must contain only letters and spaces (no numbers or symbols).");
            return false;
        }
    }

    alert("Success! Proceeding to SSLCommerz payment gateway...");
    return false;
}