(function () {
  "use strict";

  var form = document.querySelector('.php-email-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Serialize the form data
    var formData = new FormData(form);

    // Convert FormData to JSON
    var jsonData = {};
    formData.forEach(function(value, key){
        jsonData[key] = value;
    });

    // Add current date and time to the jsonData object
    var currentDate = new Date();
    jsonData['currentDate'] = currentDate.toLocaleDateString();  // Add the date in a format of your choice
    jsonData['currentTime'] = currentDate.toLocaleTimeString();  // Add the time in a format of your choice
    
    // Perform AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.sheetmonkey.io/form/x2A9PJkFyzRNf6cpqBkeHs', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
      if (xhr.status === 200) {
        // Handle success
        console.log('Form submitted successfully');
        showSuccessMessage();
      } else {
        // Handle error
        console.error('Error submitting form');
        showErrorMessage();
      }
    };

    xhr.onerror = function () {
      // Handle network or server error
      console.error('Network or server error');
      showErrorMessage();
    };

    // Send the form data and current date/time to the server as JSON
    xhr.send(JSON.stringify(jsonData));
  });

  function showSuccessMessage() {
    // Hide form elements and display success message
    var successMessage = document.querySelector('.sent-message');
    successMessage.style.display = 'block';
  }

  function showErrorMessage() {
    // Display error message
    var errorMessage = document.querySelector('.error-message');
    errorMessage.innerHTML = 'Error submitting form. Please try again.';
    errorMessage.style.display = 'block';
  }

})();
