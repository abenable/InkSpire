import Button from '../button/button';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <h1>InkSpire</h1>
        </div>
        <div className='navbar'>
          <ul>
            <li>Trending</li>
            <li>Categories</li>
            <li>about</li>
          </ul>
          <Button btn={'Join'} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
