// script.js

// Function to handle adding a property (mock implementation)
function addProperty() {
    const propertyName = document.getElementById('propertyName').value;
    const propertyLocation = document.getElementById('propertyLocation').value;
    const propertyPrice = document.getElementById('propertyPrice').value;

    if (propertyName && propertyLocation && propertyPrice) {
        // Normally, you would send this data to your server
        console.log("Property Added:", {
            name: propertyName,
            location: propertyLocation,
            price: propertyPrice,
        });

        // Clear the form fields
        document.getElementById('propertyName').value = '';
        document.getElementById('propertyLocation').value = '';
        document.getElementById('propertyPrice').value = '';

        // Close the modal
        $('#exampleModal').modal('hide');
        alert("Property added successfully!");
    } else {
        alert("Please fill in all fields.");
    }
}

// Event listener for the Add Property button
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.btn-primary'); // The button in the modal footer
    addButton.addEventListener('click', addProperty);
});
