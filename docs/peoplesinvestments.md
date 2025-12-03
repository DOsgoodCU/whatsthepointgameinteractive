# Did you invest?

## Peoples choices are below (once people have chosen)

<img src="../assets/charts/public_investment_chart.png" alt="Investment Chart" style="width: 100%; max-width: 600px; border: 1px solid #ddd; border-radius: 4px;">

<div id="navigation-container" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;"></div>

<script>
// this is this is boilerplate navigation code to add at bottom of each page--just change the first non-comment line"
    // ------------------------------------------------------------------
    // CONFIGURATION: Edit this line to point to the next Markdown folder/file
    // Example: "../round2/" or "../conclusion/"
    const NEXT_PAGE_PATH = "../discuss1/"; 
    // ------------------------------------------------------------------

    (function() {
        // 1. Get the email from the current URL
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get("email");

        // 2. Define the button HTML
        // You can change the label text 'Continue to Next Section' below if desired
        const buttonHTML = `
            <button id="nav-btn" 
                    style="padding: 15px 30px; font-size: 18px; 
                           background-color: #007bff; color: white; border: none; 
                           border-radius: 8px; cursor: pointer; transition: background 0.3s;">
                Continue to Next Section
            </button>
            <p id="nav-error" style="color: red; display: none; margin-top: 10px;">
                Error: No email address found. Please return to the start.
            </p>
        `;

        // 3. Insert the button into the container
        const navContainer = document.getElementById("navigation-container");
        if (navContainer) {
            navContainer.innerHTML = buttonHTML;
            
            // 4. Add Click Handler
            document.getElementById("nav-btn").addEventListener("click", function() {
                if (email) {
                    // Navigate to the next page, carrying the email parameter forward
                    window.location.href = NEXT_PAGE_PATH + "?email=" + encodeURIComponent(email);
                } else {
                    // Show error if email is missing (prevents broken workflows)
                    document.getElementById("nav-error").style.display = "block";
                    // Optional: Disable button
                    // this.disabled = true;
                    // this.style.backgroundColor = "#ccc";
                }
            });
        }
    })();
</script>
