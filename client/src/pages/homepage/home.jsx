import Navbar from '../../components/navbar/navbar';
import './home.css';

const Home = () => {
  return (
    <>
      <div className='header'>
        <div>
          <Navbar />
        </div>
        <div>
          <div>logo</div>
          <div>search</div>
        </div>
      </div>
      <div className='main'>
        <div>editors pick</div>
        <div>Trending</div>
      </div>
      <div className='footer'></div>
    </>
  );
};

export default Home;
