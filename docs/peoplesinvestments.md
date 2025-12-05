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
    var img = document.getElementById(&#39;inv-chart&#39;);
    if (img) {
        img.src = &quot;https://dosgoodcu.github.io/auto-assets/public_investment_chart.png?t=&quot; + new Date().getTime();
    }

    // 2. Load navigation button
    // Check if the standardized function exists before calling it
    if (typeof loadNavigationButton === &#39;function&#39;) {
        loadNavigationButton(&#39;nav-button&#39;, &#39;../discuss1/&#39;, &#39;Continue to Discussion&#39;);
    } else {
        console.error(&quot;Error: loadNavigationButton is not defined. Check if your custom javascript file is loaded.&quot;);
        // Optional: fallback text if the button fails
        var container = document.getElementById(&#39;nav-button&#39;);
        if (container) container.innerHTML = &quot;&lt;p style=&#39;color:red;&#39;&gt;Error loading navigation. Please refresh.&lt;/p&gt;&quot;;
    }
});


</script>
