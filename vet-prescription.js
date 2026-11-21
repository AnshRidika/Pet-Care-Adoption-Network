function validatePrescription() 
{
    let patient = document.getElementById("selectPatient").value;
    let visitDate = document.getElementById("visitDate").value;
    let treatment = document.getElementById("treatmentType").value.trim();
    let dosage = document.getElementById("dosage").value.trim();
    let notes = document.getElementById("treatmentNotes").value.trim();
    let file = document.getElementById("prescriptionFile").value;

    if (patient === "") 
    {
        alert("Error: Please select a patient from the dropdown.");
        return false;
    }

    if (visitDate === "") 
    {
        alert("Error: Please select the Date of Visit.");
        return false;
    }

    if (treatment === "") 
    {
        alert("Error: Please enter the Treatment or Vaccine Name.");
        return false;
    }

    if (dosage === "") 
    {
        alert("Error: Please enter the Dosage or Medicine Details.");
        return false;
    }

    if (notes === "") 
    {
        alert("Error: Please enter the Clinical Notes or Diagnosis.");
        return false;
    }

    if (file === "") 
    {
        alert("Error: Please upload the Scanned Prescription document.");
        return false;
    }

    alert("Success! The medical record has been saved and the owner has been notified.");
    
    window.location.href = "vet-patients.html";
    
    return false; 
}