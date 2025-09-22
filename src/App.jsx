import { useState } from 'react'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState({})

  const products = [
    {
      id: 1,
      name: "Подписка Spotify",
      price: 2000,
      image: "https://mygiftcard.ru/upload/iblock/334/3342b2078932d0016930faacc78ec248.png",
      category: "Музыкальные сервисы"
    },
    {
      id: 2,
      name: "Подписка Playstation plus",
      price: 10000,
      image: "https://blog.kupikod.com/storage/articles-preview-img/01JD1ZP6H7VT5X75YE0PVJ8N09.jpg",
      category: "Игровые подписки"
    },
    {
      id: 3,
      name: "Подписка ChatGPT 5 PLUS",
      price: 3000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UXTBGrg-WiTWOs_1sjEgX4fuLlGofPLKUQ&s",
      category: "Искусственный интелект"
    },
    {
      id: 4,
      name: "Лицензионный ключ Windows 10/11 Pro/Home",
      price: 5000,
      image: "https://cdn.vectorstock.com/i/1000v/15/67/windows-microsoft-symbol-brand-logo-blue-design-vector-46421567.jpg",
      category: "Операционные системы"
    }
  ]

  const handleAddToCart = (productId) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => {
      const currentQuantity = prev[productId] || 0
      if (currentQuantity <= 1) {
        const newItems = { ...prev }
        delete newItems[productId]
        return newItems
      }
      return {
        ...prev,
        [productId]: currentQuantity - 1
      }
    })
  }

  const handleRemoveAllFromCart = (productId) => {
    setCartItems(prev => {
      const newItems = { ...prev }
      delete newItems[productId]
      return newItems
    })
  }

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0)
  }

  const getTotalPrice = () => {
    return products.reduce((total, product) => {
      const quantity = cartItems[product.id] || 0
      return total + (product.price * quantity)
    }, 0)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">Podpisota</h1>
          <div className="cart-info">
            <div className="cart-indicator">
              <span className="cart-icon">🛒</span>
              {getTotalItems() > 0 && (
                <span className="cart-count">{getTotalItems()}</span>
              )}
            </div>
            {getTotalItems() > 0 && (
              <div className="cart-total">
                Итого: {getTotalPrice().toLocaleString('ru-RU')} ₽
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="hero">
            <h2>Добро пожаловать в Podpisota</h2>
            <p>Подписки на разные сервисы по лучшим ценам</p>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                quantity={cartItems[product.id] || 0}
                onAddToCart={() => handleAddToCart(product.id)}
                onRemoveFromCart={() => handleRemoveFromCart(product.id)}
                onRemoveAllFromCart={() => handleRemoveAllFromCart(product.id)}
              />
            ))}
          </div>

          {getTotalItems() > 0 && (
            <div className="cart-summary">
              <h3>Корзина</h3>
              <div className="cart-items-list">
                {products.filter(product => cartItems[product.id]).map(product => (
                  <div key={product.id} className="cart-item">
                    <span className="cart-item-name">{product.name}</span>
                    <span className="cart-item-quantity">
                      <button 
                        className="quantity-btn minus"
                        onClick={() => handleRemoveFromCart(product.id)}
                        disabled={cartItems[product.id] <= 0}
                      >
                        -
                      </button>
                      <span className="quantity">{cartItems[product.id]}</span>
                      <button 
                        className="quantity-btn plus"
                        onClick={() => handleAddToCart(product.id)}
                      >
                        +
                      </button>
                    </span>
                    <span className="cart-item-price">
                      {(product.price * cartItems[product.id]).toLocaleString('ru-RU')} ₽
                    </span>
                    <button 
                      className="remove-all-btn"
                      onClick={() => handleRemoveAllFromCart(product.id)}
                      title="Удалить все"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-total-summary">
                <strong>Общая сумма: {getTotalPrice().toLocaleString('ru-RU')} ₽</strong>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Podpisota. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App