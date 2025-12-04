# Did you invest?

## Peoples choices are below (as of the timestamp in the figure)

<!-- Replaced static img with container for cache-busting loader -->
<div id="investment-chart-container"></div>

<div id="nav-button"></div>

<script>
    // Load the fresh image with cache-busting (uses function from kobo_loader.js)
    // loadFreshImage(containerId, imageUrl, altText)
    loadFreshImage(
        'investment-chart-container', 
        'https://dosgoodcu.github.io/auto-assets/public_investment_chart.png', 
        'Investment Decisions Chart'
    );

    // loadNavigationButton('ContainerID', 'NextPagePath', 'ButtonText')
    loadNavigationButton('nav-button', '../discuss1/', 'Continue to Discussion');
</script>
