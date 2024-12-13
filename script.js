document.querySelector(".hero .btn").addEventListener("click", function() {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#about .btn").addEventListener("click", function() {
    window.location.href = "https://github.com/nahidsoft/my-cv"; // Replace with your actual file path
});

// This button could scroll to the contact form.

document.querySelector("#portfolio .btn").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

/* You can add functionality to validate the form and display a message on successful submission.

*/

document.querySelector("#contact form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields!");
    } else {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Optionally clear the form after submission
        this.reset();
    }
});
