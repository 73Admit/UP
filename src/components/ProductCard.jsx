import { useState } from 'react'

const ProductCard = ({ 
  name, 
  price, 
  image, 
  category, 
  quantity = 0,
  onAddToCart, 
  onRemoveFromCart,
  onRemoveAllFromCart 
}) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    onAddToCart()
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1000)
  }

  const handleRemoveFromCart = () => {
    onRemoveFromCart()
  }

  const handleRemoveAll = () => {
    onRemoveAllFromCart()
  }

  return (
    <div className="product-card">
      <div className="product-badge">{category}</div>
      
      <div className="product-image-container">
        <img 
          src={image} 
          alt={name}
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
            
            {quantity > 0 && (
              <div className="quantity-controls-overlay">
                <button 
                  className="quantity-btn overlay-btn"
                  onClick={handleRemoveFromCart}
                >
                  -
                </button>
                <span className="quantity-overlay">×{quantity}</span>
                <button 
                  className="quantity-btn overlay-btn"
                  onClick={handleAddToCart}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
        <div className="product-footer">
          <span className="product-price">{price.toLocaleString('ru-RU')} ₽</span>
          
          {quantity > 0 ? (
            <div className="product-quantity-controls">
              <div className="quantity-buttons">
                <button 
                  className="quantity-btn small"
                  onClick={handleRemoveFromCart}
                  title="Убрать один"
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  className="quantity-btn small"
                  onClick={handleAddToCart}
                  title="Добавить еще"
                >
                  +
                </button>
              </div>
              <button 
                className="remove-all-btn small"
                onClick={handleRemoveAll}
                title="Убрать все"
              >
                
              </button>
            </div>
          ) : (
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              В корзину
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard