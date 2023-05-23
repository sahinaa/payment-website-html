// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  // Get the payment form element
  var paymentForm = document.getElementById("payment-form");

  // Handle form submission
  paymentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from being submitted

    // Get form values
    var name = document.getElementById("name").value;
    var cardNumber = document.getElementById("card-number").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;

    // Validate form data
    if (name.trim() === "" || cardNumber.trim() === "" || expiryDate.trim() === "" || cvv.trim() === "") {
      alert("Please fill in all the fields.");
      return;
    }

    // Perform payment processing here (e.g., send data to server)

    // Clear form after successful payment
    paymentForm.reset();
    alert("Payment successful!");
  });
});
