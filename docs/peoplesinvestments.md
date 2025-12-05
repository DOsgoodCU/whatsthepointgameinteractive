# Did you invest?

## Peoples choices are below 

(as of the timestamp in the figure)

<!-- Standard Image Tag with ID for cache-busting -->

<img id="inv-chart" src="https://dosgoodcu.github.io/auto-assets/public_investment_chart.png" alt="Investment Decisions Chart" style="width: 100%; max-width: 600px; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">

<div id="nav-button"></div>

<script>
// Wait for the page and external scripts to load fully
document.addEventListener("DOMContentLoaded", function() {

    // 1. Force fresh image (Cache Busting)
    var img = document.getElementById('inv-chart');
    if (img) {
        img.src = "https://dosgoodcu.github.io/auto-assets/public_investment_chart.png?t=" + new Date().getTime();
    }

    // 2. Load navigation button
    // Check if the standardized function exists before calling it
    if (typeof loadNavigationButton === 'function') {
        loadNavigationButton('nav-button', '../discuss1/', 'Continue to Discussion');
    } else {
        console.error("Error: loadNavigationButton is not defined. Check if your custom javascript file is loaded.");
        // Optional: fallback text if the button fails
        var container = document.getElementById('nav-button');
        if (container) container.innerHTML = "<p style='color:red;'>Error loading navigation. Please refresh.</p>";
    }
});
</script>
