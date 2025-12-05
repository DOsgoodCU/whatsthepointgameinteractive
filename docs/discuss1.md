# Risky Opportunity Discussion Questions

![](bad_gum.jpg)
![](good_gum.jpg)

If you drew a blue gum out of the hat, it was a good year, if you drew a red gum, it was a bad year.

Ask yourself these questions, and fill in the form

<!-- Kobo Form Container -->
<div id="game-form" style="text-align: left; display: flex; justify-content: flex-start;">Loading form...</div>

<script>
    // Ensure the function exists before calling it
    document.addEventListener("DOMContentLoaded", function() {
        if (typeof loadKoboForm === "function") {
            // loadKoboForm('ContainerID', 'EnketoID', 'NextPagePath', 'Height')
            loadKoboForm('game-form', 'ezpHZhPP', '../peoplesregret/', '1100px');
        } else {
            console.error("Error: loadKoboForm is not defined. Check mkdocs.yml extra_javascript.");
            document.getElementById('game-form').innerHTML = "Error: Form loader script not found.";
        }
    });
</script>
