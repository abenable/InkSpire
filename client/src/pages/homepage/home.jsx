import Navbar from '../../components/navbar/navbar';
import './home.scss';

const Home = () => {
  return (
    <>
      <div className='header'>
        <div>
          <Navbar />
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
