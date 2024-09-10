

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const form = document.getElementById("subscriptionForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const submitButton = document.getElementById("submit");

  console.log("Form:", form);
  console.log("Email Input:", emailInput);
  console.log("Email Error:", emailError);
  console.log("Submit Button:", submitButton);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showError() {
    console.log("Showing error");
    emailError.classList.remove("hidden");
    emailInput.classList.add("border-red-500", "bg-red-100", "text-red-500");
    emailInput.classList.remove("border-black");
  }

  function hideError() {
    console.log("Hiding error");
    emailError.classList.add("hidden");
    emailInput.classList.remove("border-red-500", "bg-red-100", "text-red-500");
    emailInput.classList.add("border-black");
  }

  if (emailInput) {
    emailInput.addEventListener("input", () => {
      console.log("Email input changed:", emailInput.value);
      if (validateEmail(emailInput.value)) {
        hideError();
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      console.log("Form submitted");
      event.preventDefault();
      const email = emailInput.value;
      console.log("Submitted email:", email);

      if (validateEmail(email)) {
        console.log("Email is valid, proceeding to success page");
        localStorage.setItem("registeredEmail", email);
        window.location.href = "success.html";
      } else {
        console.log("Email is invalid, showing error");
        showError();
      }
    });
  }

  // Code for success page
  const dismissBtn = document.getElementById("dismissbtn");
  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      console.log("Dismiss button clicked");
      localStorage.removeItem("registeredEmail");
      window.location.href = "index.html";
    });
  }

  const userEmailSpan = document.getElementById("subscriberEmail");
  if (userEmailSpan) {
    const storedEmail = localStorage.getItem("registeredEmail");
    console.log("Stored email:", storedEmail);
    if (storedEmail) {
      userEmailSpan.textContent = storedEmail;
    } else {
      userEmailSpan.textContent = "No email found.";
    }
  }
});