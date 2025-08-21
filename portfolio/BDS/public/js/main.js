// main.js - Core functionality for all pages

// Initialize Firebase
const auth = firebase.auth();
const db = firebase.firestore();

// ======================
//  Global UI Functions
// ======================

// Initialize Bootstrap components
function initializeBootstrapComponents() {
    // Initialize all tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Initialize all popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
}

// Show alert message
function showAlert(message, type = 'danger', duration = 5000) {
    const alert = document.createElement('div');
    alert.className = alert alert-${type} alert-dismissible fade show;
    alert.role = 'alert';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('main') || document.body;
    container.prepend(alert);

    // Auto-dismiss after duration
    setTimeout(() => alert.remove(), duration);
}

// ======================
//  Authentication State
// ======================

// Update navigation based on auth state
function updateNavigation(user) {
    const authLinks = document.getElementById('authLinks');
    const profileLinks = document.getElementById('profileLinks');
    
    if (user) {
        // User is logged in
        if (authLinks) authLinks.style.display = 'none';
        if (profileLinks) {
            profileLinks.style.display = 'block';
            document.getElementById('navUserName').textContent = user.displayName || 'Profile';
        }
    } else {
        // User is logged out
        if (authLinks) authLinks.style.display = 'block';
        if (profileLinks) profileLinks.style.display = 'none';
    }
}


// Handle logout
function handleLogout() {
    auth.signOut().then(() => {
        window.location.href = '/auth/login.html';
    }).catch(error => {
        showAlert('Logout failed: ' + error.message);
    });
}

// ======================
//  Common Event Listeners
// ======================

// Logout button handler
document.addEventListener('click', (e) => {
    if (e.target.closest('#logoutButton')) {
        handleLogout();
    }
});

// ======================
//  Initialize Page
// ======================

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap components
    initializeBootstrapComponents();

    // Set up auth state listener
    auth.onAuthStateChanged(user => {
        // Update navigation
        updateNavigation(user);

        // Redirect unauthorized access
        const allowedPages = ['/', '/auth/login.html', '/auth/register.html'];
        if (!user && !allowedPages.includes(window.location.pathname)) {
            window.location.href = '/auth/login.html';
        }
    });

    // Initialize current page module
    if (typeof initPage === 'function') {
        initPage();
    }
});

// ======================
//  Utility Functions
// ======================

// Format date for display
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(date).toLocaleDateString('en-US', options);
}

// Debounce function for search inputs
function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), timeout);
    };
}