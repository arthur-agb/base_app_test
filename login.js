/**
 * Login page functionality
 * Handles form submission and validation
 */

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    /**
     * Handle form submission
     * @param {Event} event - The form submission event
     */
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Clear previous error
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
        
        // Basic validation
        if (!username || !password) {
            showError('Please fill in all fields');
            return;
        }
        
        // Simulate login process
        simulateLogin(username, password);
    });
    
    /**
     * Display error message
     * @param {string} message - The error message to display
     */
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
    
    /**
     * Simulate login process
     * @param {string} username - The username
     * @param {string} password - The password
     */
    function simulateLogin(username, password) {
        // In a real application, this would be an API call
        console.log('Attempting login with:', { username, password });
        
        // Simulate API delay
        setTimeout(() => {
            // For demo purposes, accept any non-empty credentials
            if (username && password) {
                alert('Login successful!');
                // In a real app, you would redirect or update UI
            } else {
                showError('Invalid credentials');
            }
        }, 500);
    }
});
