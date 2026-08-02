function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>Campus SnackPass</h1>

      <div className="cart">
        🛒 Cart: {cartCount}
      </div>
    </nav>
  );
}

export default Navbar;