function validateBooking() 
{
    let pet = document.getElementById("selectPet").value;

    if (pet === "") {
        alert("Error: Please select a pet for this appointment.");
        return false;
    }

    alert("Success! Appointment confirmed.");
    window.location.href = "owner-book.html";
    return false;
}
