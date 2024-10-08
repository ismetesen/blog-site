import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Otagsahafos</h1>
        <div className="links">
          <Link to ="/">Anasayfa</Link>
          <Link to ="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>Yeni Ürün</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;