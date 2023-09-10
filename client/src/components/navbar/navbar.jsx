import Button from '../button/button';
import './navbar.scss';

const Navbar = () => {
  return (
    <>
      <div className='nav'>
        <div className='logo'>
          <h1>InkSpire</h1>
        </div>
        <div className='navbar'>
          <div className='navigation'>
            <li>Trending</li>
            <li>Categories</li>
            <li>about</li>
          <Button btn={'Join'} />
          </div>
          <div className="search">search</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
