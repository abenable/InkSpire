import axios from 'axios';
import { useState, useEffect } from 'react';
import './home.scss';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [top, setTop] = useState([]);
  const [recommended, setRecommeded] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const topRes = await axios.get('http://localhost:3001/blog/top');
      const trendingRes = await axios.get(
        'http://localhost:3001/blog/trending'
      );
      const recommendedRes = await axios.get(
        'http://localhost:3001/blog/recommended'
      );

      setTop(topRes.data);
      setTrending(trendingRes.data);
      setRecommeded(recommendedRes.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {
        <div>
          {/* Render Recommended Post */}
          <h2>Recommended Post</h2>
          <h3>{recommended.title}</h3>
          <p>{recommended.body}</p>
        </div>
      }

      <div className='container'>
        {trending.map((post) => (
          <div key={post.id}>
            {/* Render Trending Post */}
            <h2>Trending</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <div className='top'>
        {/* Render Top Posts */}
        <h2>Top Posts</h2>
        {top.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
