/**
 * Master Kobo Form & Navigation Loader
 * Handles frame-busting, form embedding, email persistence, and cache-busting images.
 */

// --- 1. GLOBAL FRAME BUSTER ---
if (window.self !== window.top) {
    window.top.location.href = window.location.href;
}

// --- HELPER: Get Email Safely ---
function getEmailFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    return email ? email : ""; 
}

// --- HELPER: Build Next Page URL ---
function buildNextUrl(path, email) {
    const baseUrl = new URL(path, window.location.href);
    if (email) {
        baseUrl.searchParams.set("email", email);
    }
    return baseUrl.href;
}

/**
 * FUNCTION 1: Load Kobo Form
 */
function loadKoboForm(containerId, koboId, nextPagePath, height = '650px', width = '100%') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const email = getEmailFromUrl();
    const absoluteReturnUrl = buildNextUrl(nextPagePath, email);

    let koboUrl = `https://ee.kobotoolbox.org/single/${koboId}?hide=saving&return_url=${encodeURIComponent(absoluteReturnUrl)}`;
    
    if (email) {
        koboUrl += `&d[email]=${encodeURIComponent(email)}`;
    }

    container.innerHTML = `
        <iframe 
            src="${koboUrl}" 
            style="width: ${width}; 
                   max-width: 500px; 
                   height: ${height}; 
                   border: 1px solid #ccc; 
                   border-radius: 8px; 
                   box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
                   display: block; margin: 0 auto; overflow: hidden;"
        ></iframe>`;
}

/**
 * FUNCTION 2: Load Navigation Button
 */
function loadNavigationButton(containerId, nextPagePath, buttonLabel = "Continue to Next Section") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const email = getEmailFromUrl();

    container.innerHTML = `
        <div style="text-align: center; margin-top: 30px;">
            <button id="nav-btn-${containerId}" 
                style="padding: 15px 30px; font-size: 18px; 
                       background-color: #007bff; color: white; border: none; 
                       border-radius: 8px; cursor: pointer; transition: background 0.2s;">
                ${buttonLabel}
            </button>
        </div>`;

    document.getElementById(`nav-btn-${containerId}`).addEventListener("click", function() {
        window.location.href = buildNextUrl(nextPagePath, email);
    });
}

/**
 * FUNCTION 3: Load Fresh Image (Cache Buster)
 * Usage: loadFreshImage('chart-div', 'https://.../chart.png');
 */
function loadFreshImage(containerId, imageUrl, altText = "Chart") {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Append a unique timestamp to the URL to force the browser to re-download it
    const cacheBuster = new Date().getTime();
    const freshUrl = `${imageUrl}?v=${cacheBuster}`;

    container.innerHTML = `
        <img src="${freshUrl}" 
             alt="${altText}" 
             style="width: 100%; max-width: 600px; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    `;
}

