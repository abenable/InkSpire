import { useState, useEffect } from 'react';
import axios from 'axios';

import './home.scss';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001').then((res) => {
      setTrends(res);
    });
    axios.get('http://localhost:3001').then((res) => {
      setTopPicks(res);
    });
  }, []);

  console.log(trends);
  console.log(topPicks);
  return <h1>welcome</h1>;
};

export default Home;
