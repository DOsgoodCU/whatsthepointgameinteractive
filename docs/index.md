# Whats the point?

### 3:44

This is an example of an exercise to help farmers, donors, and project partners evaluate if insurance would have value.  It is one use case—many others exist.

It is intended to catalyze key discussions for investment and adaptation opportunities insurance could de-risk and incentivise, and to provide a quantitative tool for people to evaluate if it is meeting its needs.

## Enter your email

<div style="margin-top:20px; max-width:400px;">
    <input id="user_email" type="email" placeholder="Enter your email"
           style="width:100%; padding:12px; font-size:18px; border:2px solid #ccc; border-radius:6px;">
    <button onclick="startGame()" 
            style="margin-top:10px; padding:15px 30px; font-size:18px; 
                   background-color: #007bff; color: white; border: none; 
                   border-radius: 8px; cursor: pointer;">
        Begin
    </button>
</div>

<script>
function startGame() {
    const email = document.getElementById("user_email").value.trim();

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    window.location.href = "game_time/?email=" + encodeURIComponent(email);
}
</script>
<img src="hat.jpg" alt="Hat" style="width:500px;">

