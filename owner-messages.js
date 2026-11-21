function validateMessage() 
{
    let recipient = document.getElementById("messageTo").value;
    let message = document.getElementById("messageBody").value;

    if (recipient === "" || message === "") {
        alert("Error: Please select a recipient and write a message.");
        return false;
    }

    alert("Message sent successfully!");
    window.location.href = "owner-messages.html";
    return false;
}

function validateReview() 
{
    let review = document.getElementById("reviewText").value;

    if (review === "") 
    {
        alert("Error: Please write a review before submitting.");
        return false;
    }

    if (review.length < 10) 
    {
        alert("Error: Review is too short. Please provide more detail.");
        return false;
    }

    alert("Review submitted successfully!");
     window.location.href = "owner-messages.html";
    return false;
}