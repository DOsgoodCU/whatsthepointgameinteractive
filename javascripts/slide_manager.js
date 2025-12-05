/* Basic styling for the injected elements */

#dynamic-slide-content {
    margin-top: 20px;
    padding: 15px;
    border-top: 1px solid #eee;
}

/* Button Styling */
.nav-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 15px 30px; /* Matching kobo_loader padding */
    font-size: 18px;    /* Matching kobo_loader font size */
    border-radius: 8px; /* Matching kobo_loader radius */
    cursor: pointer;
    transition: background 0.3s;
}

.nav-btn:hover {
    background-color: #0056b3;
}

/* Input Styling (Type 4) */
.input-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

#user-email {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 250px;
}

/* Figure Styling (Type 2) */
.figure-wrapper {
    text-align: center;
    margin-bottom: 20px;
}

.slide-figure {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Kobo Iframe Styling (Type 1) */
/* Replicates the inline styles from kobo_loader.js */
.iframe-wrapper iframe {
    display: block;
    margin: 0 auto;
    max-width: 600px; /* Prevents it from being too wide on desktop */
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    background: white;
}

/* Wrapper for alignment */
.nav-wrapper {
    text-align: center;
    margin-top: 30px;
}
