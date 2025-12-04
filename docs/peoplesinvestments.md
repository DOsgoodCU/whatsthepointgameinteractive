# Did you invest?

## Peoples choices are below (as of the timestamp in the figure)

<!-- Standard Image Tag with ID for cache-busting -->
<img id="inv-chart" src="https://dosgoodcu.github.io/auto-assets/public_investment_chart.png" alt="Investment Decisions Chart" style="width: 100%; max-width: 600px; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">

<div id="nav-button"></div>

<script>
    // 1. Force fresh image (Cache Busting)
    // This adds ?t=timestamp to the URL so the browser re-downloads the image
    var img = document.getElementById('inv-chart');
    if (img) {
        img.src = "https://dosgoodcu.github.io/auto-assets/public_investment_chart.png?t=" + new Date().getTime();
    }

    // 2. Load navigation button
    // We check if the function exists to prevent errors if the external script isn't loaded
    if (typeof loadNavigationButton === 'function') {
        loadNavigationButton('nav-button', '../discuss1/', 'Continue to Discussion');
    }
</script>
