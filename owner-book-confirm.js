function validateBooking() 
{
    let pet = document.getElementById("selectPet").value;
    let rea = document.getElementById("reason").value.trim();

    if (pet === "") 
    {
        alert("Error: Please select a pet for this appointment.");
        return false;
    }
    if (rea === "") 
    {
        alert("Error: Please fill up the reason for visit for this appointment.");
        return false;
    }


    alert("Success! Appointment confirmed.");
    window.location.href = "owner-book.html";
    return false;
}
