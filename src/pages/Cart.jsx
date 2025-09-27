import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="auth-required-message">
            <h2>Требуется авторизация</h2>
            <p>Для просмотра корзины необходимо войти в аккаунт</p>
            <button 
              onClick={() => navigate('/login', { state: { from: { pathname: '/cart' } } })}
              className="btn btn-primary"
            >
              Войти в аккаунт
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <h2>Корзина пуста</h2>
            <p>Добавьте подписки из каталога</p>
            <Link to="/" className="btn btn-primary">
              Перейти к подпискам
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Корзина</h1>
          <button onClick={clearCart} className="btn btn-danger">
            Очистить корзину
          </button>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-category">{item.category}</p>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <span className="cart-item-price">
                  {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                </span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                  title="Удалить товар"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="total-price">
            <strong>Итого: {getTotalPrice().toLocaleString('ru-RU')} ₽</strong>
          </div>
          <div className="cart-actions">
            <Link to="/" className="btn btn-secondary">
              Продолжить покупки
            </Link>
            <button className="btn btn-primary">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;