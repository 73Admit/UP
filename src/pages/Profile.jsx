import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <h1>Профиль пользователя</h1>
          <button onClick={handleLogout} className="btn btn-danger">
            Выйти
          </button>
        </div>

        <div className="profile-info">
          <div className="info-card">
            <h2>👤 Личная информация</h2>
            <div className="info-item">
              <strong>Имя:</strong> {user?.name}
            </div>
            <div className="info-item">
              <strong>Email:</strong> {user?.email}
            </div>
            <div className="info-item">
              <strong>ID:</strong> {user?.id}
            </div>
          </div>

          <div className="stats-card">
            <h2>📊 Статистика</h2>
            <div className="stat-item">
              <span>Товаров в корзине:</span>
              <strong>{items.length}</strong>
            </div>
            <div className="stat-item">
              <span>Общая сумма:</span>
              <strong>{getTotalPrice().toLocaleString('ru-RU')} ₽</strong>
            </div>
            <div className="stat-item">
              <span>Общее количество:</span>
              <strong>{items.reduce((total, item) => total + item.quantity, 0)}</strong>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button onClick={() => navigate('/cart')} className="btn btn-primary">
            Перейти в корзину
          </button>
          <button onClick={() => navigate('/')} className="btn btn-secondary">
            Продолжить покупки
          </button>
          <button onClick={clearCart} className="btn btn-danger">
            Очистить корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;