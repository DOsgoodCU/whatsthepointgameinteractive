# Any regrets?

## Peoples choices are below (once people have chosen)

There are adaptation choices help increase productivity, but they can be risky to farmers that are making decision under an uncertain climate.  People need to be comfortable with their choices given the odds they face.

<!-- 1. THE IMAGE (Standardized) -->
<!-- Just set the 'src' here. The script will handle the updating automatically. -->
<img id="inv-chart" src="https://dosgoodcu.github.io/auto-assets/public_regret_chart.png" alt="Regret Chart" style="width: 100%; max-width: 600px; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">

<div id="nav-button"></div>

<script>
// Wait for the page and external scripts to load fully
document.addEventListener("DOMContentLoaded", function() {

    // --- STANDARD CHART RELOADER ---
    // This reads the URL from the image tag above and adds a timestamp
    var img = document.getElementById('inv-chart');
    if (img) {
        var cleanSrc = img.getAttribute('src').split('?')[0]; // Get URL without existing params
        img.src = cleanSrc + "?t=" + new Date().getTime();    // Add timestamp
    }

    // --- STANDARD NAVIGATION BUTTON ---
    if (typeof loadNavigationButton === 'function') {
        loadNavigationButton('nav-button', '../round2/', 'Continue to Discussion');
    } else {
        console.error("Error: loadNavigationButton is not defined.");
        document.getElementById('nav-button').innerHTML = "<p style='color:red;'>Nav Error</p>";
    }
});
</script>
