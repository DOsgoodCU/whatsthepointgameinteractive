# Risky Opportunity Discussion Questions

<script>
// --- CONFIGURATION ---
// Confirmed working Kobo API endpoint (v2 API)
//const KOBODATA_URL = 'https://kc.kobotoolbox.org/api/v2/assets/a47rybfYeno7GVRDbsdwmK/data/?format=json';
// --- CONFIGURATION ---
// We prepend the public CORS proxy URL to bypass browser security restrictions.
const KOBODATA_URL = 'https://cors-anywhere.herokuapp.com/https://kc.kobotoolbox.org/api/v2/assets/a47rybfYeno7GVRDbsdwmK/data/?format=json';

// Confirmed field name from the JSON output
const DATA_FIELD_NAME = 'invest_choice'; 
// ... rest of your script ...

// Confirmed field name from the JSON output
const DATA_FIELD_NAME = 'invest_choice'; 
// The API returns an object with a 'results' array for v2 endpoints
// --- FETCH AND PROCESS DATA ---

document.getElementById("loading-message").style.display = 'block';

fetch(KOBODATA_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let investCount = 0;
        let dontInvestCount = 0;
        let totalDecisions = 0;
        
        // Loop through all records in the 'results' array
        data.results.forEach(record => {
            const choice = record[DATA_FIELD_NAME];
            
            // Check for the confirmed values: 'invest' and 'dont_invest'
            if (choice === 'invest') {
                investCount++;
                totalDecisions++;
            } else if (choice === 'dont_invest') {
                dontInvestCount++;
                totalDecisions++;
            }
        });

        // --- RENDER TABLE ---
        const tableBody = document.getElementById("table-body");
        const tableFooter = document.getElementById("table-footer");

        const investRow = `
            <tr>
                <td style="border: 1px solid #ddd; padding: 12px;">Invest</td>
                <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">${investCount}</td>
            </tr>`;
            
        const dontInvestRow = `
            <tr>
                <td style="border: 1px solid #ddd; padding: 12px;">Do Not Invest</td>
                <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">${dontInvestCount}</td>
            </tr>`;
            
        const totalRow = `
            <tr style="font-weight: bold; background-color: #e0e0e0;">
                <td style="border: 1px solid #ddd; padding: 12px;">Total Decisions Recorded</td>
                <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">${totalDecisions}</td>
            </tr>`;

        tableBody.innerHTML = investRow + dontInvestRow;
        tableFooter.innerHTML = totalRow;
        
        // Hide loading message and show table
        document.getElementById("loading-message").style.display = 'none';
        document.getElementById("results-table").style.display = 'table';
    })
    .catch(error => {
        // Display a detailed error message if the API call fails
        document.getElementById("loading-message").innerHTML = `<p style="color: red;">Failed to load aggregate data. Please verify your Kobo sharing settings and API URL. Error: ${error.message}</p>`;
        console.error('API Error:', error);
    });
</script>

![](bad_gum.jpg)
![](good_gum.jpg)

If you drew a blue gum out of the hat, it was a good year, if you drew a red gum, it was a bad year.

Ask yourself these questions, and fill in the form

<div id="form_container"></div>

<script>
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");

const koboId = "ezpHZhPP"; // Section 2
let iframeHTML = "";

if (!email) {
    iframeHTML = "<p>Error: No email provided. Please go back to the start page.</p>";
} else {
// Example from discuss1.md:
const koboURL = `https://ee.kobotoolbox.org/${koboId}?&d[email]=${encodeURIComponent(email)}&cache=false#theme=plain&hide=saving`;
    iframeHTML = `
        <iframe 
            src="${koboURL}" 
            width="50%" 
            height="900" 
            style="border:none; margin-top:20px;">
        </iframe>`;
}

document.getElementById("form_container").innerHTML = iframeHTML;

// --- NAVIGATION CODE ---

if (email) {
    // Add the "Continue" button HTML after the form container
    const nextButtonHTML = `
        <button onclick="continueToRound2()" 
                style="margin-top: 30px; padding: 15px 30px; font-size: 18px; 
                       background-color: #007bff; color: white; border: none; 
                       border-radius: 8px; cursor: pointer;">
            Continue to Next Step
        </button>`;

    // Insert the button immediately after the form container
    document.getElementById("form_container").insertAdjacentHTML('afterend', nextButtonHTML);
    
    // Define the function to navigate and pass the email
    window.continueToRound2 = function() {
        // 2. **CORRECTED NAVIGATION PATH:** Use relative path for local and deployed testing
        window.location.href = "../peoplesregret/?email=" + encodeURIComponent(email);
    }
}
</script>


