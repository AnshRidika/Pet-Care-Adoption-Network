function validateSchedule() 
{
    let startDateVal = document.getElementById("scheduleStartDate").value;
    let endDateVal = document.getElementById("scheduleEndDate").value;
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;

    if (startDateVal === "" || endDateVal === "") 
    {
        alert("Error: Please fill in both Start and End Dates.");
        return false;
    }

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let minDate = new Date(today);
    minDate.setDate(today.getDate() + 1);

    let maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    let startDate = new Date(startDateVal);
    let endDate = new Date(endDateVal);

    if (startDate < minDate) 
    {
        alert("Error: The schedule must start from tomorrow onwards. You cannot select today or a past date.");
        return false;
    }

    if (endDate > maxDate) 
    {
        alert("Error: You cannot apply a schedule beyond the last date of next month.");
        return false;
    }

    let timeDiff = endDate.getTime() - startDate.getTime();
    let dayDiff = timeDiff / (1000 * 3600 * 24);
    
    if (dayDiff < 0) 
    {
        alert("Error: The End Date cannot be before the Start Date.");
        return false;
    }
    
    if (dayDiff > 6)
    {
        alert("Error: The schedule cannot be set for more than 1 week (7 days).");
        return false;
    }

    if (startTime === "" || endTime === "") 
    {
        alert("Error: Please fill in both Start Time and End Time.");
        return false;
    }

    if (startTime < "09:00") 
    {
        alert("Error: Start time cannot be before 9:00 AM.");
        return false;
    }

    if (endTime > "17:00") 
    {
        alert("Error: End time cannot be after 5:00 PM.");
        return false;
    }

    if (startTime >= endTime) 
    {
        alert("Error: End time must be after Start time.");
        return false;
    }

    let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    let daySelected = false;

    for (let i = 0; i < days.length; i++) 
    {
        if (document.getElementById(days[i]).checked) 
        {
            daySelected = true;
            break;
        }
    }

    if (daySelected === false) 
    {
        alert("Error: Please select at least one available day.");
        return false;
    }

    alert("Success! Your availability schedule has been saved and generated.");
    window.location.href = "vet-calendar.html";
    return false;
}