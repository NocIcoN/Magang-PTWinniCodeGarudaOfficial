import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  const handleLoginSuccess = (data) => {
    console.log('Login successful:', data);
    // Redirect to dashboard or store the login data
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default LoginPage;
