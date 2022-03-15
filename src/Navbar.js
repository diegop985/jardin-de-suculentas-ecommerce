
import './Navbar.css';

const nav = () => {
  return (
    <>
      <div class="header-container">
        <nav class="navbar">
          <img
            class="logo"
            src="https://images.vexels.com/media/users/3/230401/isolated/lists/c9e27bacb1dacc48268c59e3b12bb6f8-feliz-planta-de-interior-suculenta-kawaii.png"
          ></img>
          <li class="nav-links">
            <ul>Home</ul>
            <ul>Tienda</ul>
            <ul>Galeria</ul>
            <ul>About us</ul>
            <ul>Carrito</ul>
          </li>
        </nav>
      </div>
    </>
  );
};

export default nav;

