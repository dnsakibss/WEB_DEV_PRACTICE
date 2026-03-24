function showPage(pageId) {
    // Hide dashboard cards
    document.querySelector('.container').style.display = 'none';
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');

    // Show selected page
    document.getElementById(pageId).style.display = 'block';
}

function goBack() {
    // Show dashboard cards
    document.querySelector('.container').style.display = 'flex';

    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
}

// Profile Form
function saveProfile() {
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    if (!name || !email) {
        alert("Please fill in all fields!");
        return false;
    }
    alert(`Profile Saved!\nName: ${name}\nEmail: ${email}`);
    return false;
}

// Skills
function skillSelected(skill) {
    alert("You selected: " + skill);
}

// Settings Form
function saveSettings() {
    const darkMode = document.getElementById('darkMode').checked;
    const notifications = document.getElementById('notifications').checked;
    alert(`Settings Saved!\nDark Mode: ${darkMode}\nNotifications: ${notifications}`);

    // Optional: Apply dark mode
    document.body.style.backgroundColor = darkMode ? '#222' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#000';

    return false;
}