import React, {useState, useEffect} from 'react';

//Api
import { getCoins } from '../services/api';

//Component
import CoinLine from './shared/CoinLine'

const Homepage = () => {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setCoins(await getCoins())
      return ;
    }
    fetchData();
  }, [])
  return (
    <div>
      {coins.map(coin => <CoinLine key={coin.id} data={coin}/>)}
    </div>
  );
};

export default Homepage;