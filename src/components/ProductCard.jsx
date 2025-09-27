import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      // Перенаправляем на страницу логина с возвратом обратно
      navigate('/login', { state: { from: { pathname: '/' } } });
      return;
    }
    
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: '/' } } });
      return;
    }
    
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-card">
      <div className="product-badge">{product.category}</div>
      
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        <div className="product-overlay">
          <div className="product-actions">
            <button 
              className={`add-btn ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {isAdded ? '✓ Добавлено' : '+ Добавить'}
            </button>
            <button 
              className="buy-now-btn"
              onClick={handleBuyNow}
            >
              Купить сейчас
            </button>
          </div>
        </div>
      </div>

      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-footer">
          <span className="product-price">{product.price.toLocaleString('ru-RU')} ₽</span>
          {!isAuthenticated && (
            <small className="auth-required">*Требуется вход</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;