document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your user ID

  emailjs.init({
    publicKey: "ivaJM-_IgYJOyevvR",
  });
  // Replace with your actual user ID

  // Prevent the context menu on right-click for specific elements
  var certificateElement = document.getElementById("my-cer");
  if (certificateElement) {
    certificateElement.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }

  // Hide the loading overlay once the page is fully loaded
  window.addEventListener("load", () => {
    const overlay = document.getElementById("loading-overlay");
    if (overlay) {
      overlay.classList.add("hidden");
      setTimeout(() => {
        overlay.remove();
      }, 4000); // Matches the CSS transition duration
    }
  });

  // Handle form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting the traditional way

      // Get form field values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Prepare email data
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      // Send email using EmailJS
      emailjs
        .send(
          "service_ibddi3s", // Service ID
          "template_0n2j55m", // Template ID
          templateParams,
          "ivaJM-_IgYJOyevvR" // User ID
        )
        .then(function (response) {
          alert("Message sent successfully!");
        })
        .catch(function (error) {
          alert("Failed to send the message, please try again.");
        });

      // Clear form fields after submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    });
  }
});
