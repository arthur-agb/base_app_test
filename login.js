/**
 * Login form handling
 */
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        // Clear previous error
        errorMessage.textContent = '';
        
        // Basic validation
        if (!username || !password) {
            errorMessage.textContent = 'Please fill in all fields';
            return;
        }
        
        // Simulate login process
        simulateLogin(username, password);
    });
    
    /**
     * Simulates login process
     * @param {string} username - The username
     * @param {string} password - The password
     */
    function simulateLogin(username, password) {
        // In a real application, this would be an API call
        console.log('Attempting login for:', username);
        
        // Simulate API delay
        setTimeout(() => {
            // For demo purposes, accept any non-empty credentials
            if (username && password) {
                alert('Login successful!');
                // In a real app, you would redirect or update UI
            } else {
                errorMessage.textContent = 'Invalid credentials';
            }
        }, 500);
    }
});
