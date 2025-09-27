import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async () => {
    setIsLoggingIn(true);
    
    // Имитация задержки авторизации
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    login();
    setIsLoggingIn(false);
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-card">
          <h1>Вход в аккаунт</h1>
          <p>Нажмите кнопку ниже для мгновенного входа</p>
          
          <div className="login-features">
            <div className="feature">
              <span>✅</span>
              <p>Мгновенный вход без пароля</p>
            </div>
            <div className="feature">
              <span>✅</span>
              <p>Доступ ко всем функциям</p>
            </div>
            <div className="feature">
              <span>✅</span>
              <p>Безопасно и удобно</p>
            </div>
          </div>

          <button 
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="login-button"
          >
            {isLoggingIn ? 'Вход...' : 'Войти мгновенно'}
          </button>

          <p className="login-note">
            После входа вы сможете добавлять товары в корзину и оформлять заказы
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;