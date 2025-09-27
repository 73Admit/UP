import ProductCard from '../components/ProductCard';

const Home = () => {
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
      name: "Подписка Playstation Plus",
      price: 10000,
      image: "https://blog.kupikod.com/storage/articles-preview-img/01JD1ZP6H7VT5X75YE0PVJ8N09.jpg",
      category: "Игровые подписки"
    },
    {
      id: 3,
      name: "Подписка ChatGPT Plus",
      price: 3000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UXTBGrg-WiTWOs_1sjEgX4fuLlGofPLKUQ&s",
      category: "Искусственный интеллект"
    },
    {
      id: 4,
      name: "Лицензия Windows 10/11 Pro",
      price: 5000,
      image: "https://cdn.vectorstock.com/i/1000v/15/67/windows-microsoft-symbol-brand-logo-blue-design-vector-46421567.jpg",
      category: "Операционные системы"
    },
    {
      id: 5,
      name: "Подписка YouTube Premium",
      price: 1500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_rLRjtMwVDikZbKhSLTMEzskPd0fGN3nYA&sы",
      category: "Видео сервисы"
    },
    {
      id: 6,
      name: "Подписка Netflix",
      price: 2500,
      image: "https://cinepromo.ru/images/logos/netflix.jpg",
      category: "Стриминговые сервисы"
    }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Добро пожаловать в Podpisota</h1>
          <p>Подписки на разные сервисы по лучшим ценам</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2>Наши подписки</h2>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;