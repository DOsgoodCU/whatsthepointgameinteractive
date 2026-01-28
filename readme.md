# Slide Instructions

This project uses mkdocs, kobo, and some javascript to make an educational or project decision workflow where output is saved in kobo.  

- The email from the email setting form is preserved into the next pages and shows up automatically in the kobo forms if you do things correctly, and the user only submits forms or uses the "go to the next page" button at the bottom.  The javascript takes care of that.  
- If they navigate using the navigation menu on the left side of the screen, the email persistance may not persist.
- You can see it as /?email=a@b.c at the end of the url in your browser

In theory, you should be able to set up a new github mkdocs repo and copy this stuff over, and then edit it to what you want.  Y
ou will also need a kobo account.

## Stuff inside

- the docs folder has the text that people will see, with each page being a file named something.md as well as the image files that these call.
  - inside of the docs folder is the javascripts folder, which has the code that 
- the koboforms folder has the kobo forms that were used and uploaded into kobo for the workflow
- the site folder is automatically generated so you dont need to worry about that
- the mkdocs.yml

This project uses a simplified "Configuration Div" system to handle slide logic (forms, redirects, images, and email persistence). Instead of writing complex HTML/JS in every slide, you simply place one configuration line at the top of your Markdown file.

1. Installation

Ensure the following files are in place:

JavaScript: docs/javascripts/slide-manager.js

CSS: docs/stylesheets/styles.css

Configuration: Update mkdocs.yml:

extra_css:
  - stylesheets/styles.css

extra_javascript:
  # kobo_loader.js is retained for backwards compatibility
  - javascripts/kobo_loader.js
  - javascripts/slide-manager.js


2. How to Use

At the top of your Markdown file (below the YAML frontmatter if you use it), add a single HTML <div> with the ID slide-config. The JavaScript reads this line to determine what to render.

Type 1: Kobo Form Slide

Displays a KoboToolbox form. It automatically prefills the user's email (if captured previously) and handles the redirect upon submission.

Attributes:

data-type="kobo"

data-next: Path to the next slide (e.g., ../slide2/ or slide2.html).

data-kobo-url: The URL of your Kobo form (e.g., https://ee.kobotoolbox.org/x/YourID).

Example:

<div id="slide-config" 
     data-type="kobo" 
     data-next="../slide3/" 
     data-kobo-url="[https://ee.kobotoolbox.org/x/aB1cD2eF](https://ee.kobotoolbox.org/x/aB1cD2eF)">
</div>

# Survey
Please complete the form below.


Type 2: Figure Slide

Displays an image and a "Next" button. It automatically adds a timestamp to the image URL to force a fresh reload (preventing stale cache issues).

Attributes:

data-type="figure"

data-next: Path to the next slide.

data-img: Path to your image file (e.g., assets/chart.png).

Example:

<div id="slide-config" 
     data-type="figure" 
     data-next="../slide4/" 
     data-img="https://dosgoodcu.github.io/auto-assets/public_investment_chart.png">
</div>

# Results
Here is your latest performance graph.


Type 3: Simple Text Slide

Displays standard Markdown text with a "Next" button at the bottom.

Attributes:

data-type="simple"

data-next: Path to the next slide.

Example:

<div id="slide-config" 
     data-type="simple" 
     data-next="../slide2/">
</div>

# Information
Read this important text. Click the button below when you are done.


Type 4: Start Slide (Email Entry)

The entry point. Asks the user for their email, saves it to session storage, and forwards it to the next slide.

Attributes:

data-type="start"

data-next: Path to the first real content slide.

Example:

<div id="slide-config" 
     data-type="start" 
     data-next="../slide1/">
</div>

# Welcome
Please enter your email to begin the simulation.


3. Key Features & Troubleshooting

Email Persistence: The system checks both the URL (?email=...) and Session Storage. This ensures the email variable is never lost between slides.

Frame Busting: If a slide is loaded inside a small iframe (common with Kobo redirects), the script automatically forces the top-level window to navigate to the slide.

Backward Compatibility: This system runs alongside kobo_loader.js. Old slides using <script>loadKoboForm(...)</script> will continue to work, but new slides should use the slide-config method.
