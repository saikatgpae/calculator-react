import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header p-2">
    <h1 className="text-denger">Math Magician</h1>
    <nav className="navbar">
      <div><Link to="/">Home</Link></div>
      <div>|</div>
      <div><Link to="/calculator">Calculator</Link></div>
      <div>|</div>
      <div><Link to="/Quote">Quote</Link></div>
    </nav>
  </header>
);
export default Navbar;
