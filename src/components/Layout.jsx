import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2025 Podpisota. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;