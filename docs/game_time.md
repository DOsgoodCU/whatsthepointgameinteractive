# Game Time!

## 11:51

![](hat_gum.png)

Play to have fun--don’t take this too seriously!

You are a farmer…

You have a choice of taking out a loan for quality inputs that would make you much more productive in normal years

But you would lose the farm if there was a drought this year, because you wouldn’t be able to repay the loan

You have a 1 in 5 chance of drought.

We have 5 packages of gum in my hat. 

- The 4 blue ones represent a year with adequate rainfall

- The 1 red one represents a year with a drought

We will randomly draw one of the packages from the hat, and if its red, there was a drought.

We typically add real world prices, etc. to the game
But that’s no fun in a workshop so we will point you to tools to do that later!

But first--make your choice!

- **Put your left thumb up if you take the chance**

- **Put your left thumb down if you stay with your current, low productivity package**

Then, look at your thumb, remember what you chose, and fill out this form:

<div id="form_container"></div>

<script>
// Extract email from the query string (existing code)
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");

// Build Kobo URL for section 1 (existing code, ensure &d[email]= syntax for reliability)
const koboId = "b5CVmfVW";  // Section 1
let iframeHTML = "";

if (!email) {
    iframeHTML = "<p>Error: No email provided. Please go back to the start page to use this navigation.</p>";
} else {
// Example from discuss1.md:
const koboURL = `https://ee.kobotoolbox.org/${koboId}?&d[email]=${encodeURIComponent(email)}&cache=false#theme=plain&hide=saving`;

iframeHTML = `
        <iframe 
            src="${koboURL}" 
            width="50%" 
            height="800" 
            style="border:none; margin-top:20px;">
        </iframe>`;
}

document.getElementById("form_container").innerHTML = iframeHTML;

// --- NEW CODE FOR NAVIGATION ---

if (email) {
    // 1. Add the "Continue" button HTML after the form
    const nextButtonHTML = `
        <button onclick="continueToDiscuss()" 
                style="margin-top: 30px; padding: 15px 30px; font-size: 18px; 
                       background-color: #007bff; color: white; border: none; 
                       border-radius: 8px; cursor: pointer;">
            Continue to Discussion Questions
        </button>`;

    // Insert the button immediately after the form container
    document.getElementById("form_container").insertAdjacentHTML('afterend', nextButtonHTML);
    
    // 2. Define the function to navigate and pass the email
    window.continueToDiscuss = function() {
        // Navigate to the next page (discuss1/) and append the email query string
        // The resulting URL will be: discuss1/?email=do2126%40columbia.edu
        window.location.href = "../peoplesinvestments/?email=" + encodeURIComponent(email);
    }
}
// --- END NEW CODE ---
</script>

