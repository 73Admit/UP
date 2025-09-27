import { NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="logo">
          Podpisota
        </NavLink>
        
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Главная
          </NavLink>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Корзина {getTotalItems() > 0 && `(${getTotalItems()})`}
          </NavLink>
        </nav>

        <div className="header-controls">
          <ThemeToggle />
          
          {isAuthenticated ? (
            <div className="user-menu">
              <NavLink to="/profile" className="user-link">
                👤 {user?.name}
              </NavLink>
              <button onClick={handleLogout} className="logout-btn" title="Выйти">
                🚪
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="login-btn">
              Войти
            </NavLink>
          )}
          
          <div className="cart-indicator">
            <span className="cart-icon">🛒</span>
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;