function validateDonation() 
{
    let email = document.getElementById("donorEmail").value;
    let amount = document.getElementById("donationAmount").value;

    if (email === "" || amount === "") 
    {
        alert("Error: Please fill out all required fields.");
        return false;
    }

    if (!email.includes("@")) 
    {
        alert("Error: Please enter a valid email address.");
        return false;
    }

    if (amount < 10) 
    {
        alert("Error: Minimum donation amount is 10 BDT.");
        return false;
    }
    alert("Success! Proceeding to SSLCommerz payment gateway...");
    return false;
}