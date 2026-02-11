```css login.css
/* Login page styles */
.login-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
}

.login-form {
    width: 300px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

.form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

.login-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.login-button:hover {
    background-color: #0056b3;
}

.error-message {
    color: #dc3545;
    margin-top: 10px;
    font-size: 14px;
}
```

```html login.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="login-container">
        <form class="login-form" id="loginForm">
            <h2>Login</h2>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="login-button">Login</button>
            <div class="error-message" id="errorMessage"></div>
        </form>
    </div>
    <script src="login.js"></script>
</body>
</html>
```

```javascript login.js
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
```