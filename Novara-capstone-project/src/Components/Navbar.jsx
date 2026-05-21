import planetLogo from '../assets/Nav Bar Top (1).png';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={planetLogo} alt="Planet Logo" className="logo" />
    </nav>
  );
}

export default Navbar;