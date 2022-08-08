import axios from 'axios';

const BASE_URL = "https://api.coingecko.com/api/v3/coins/"

const getCoins = async () => {
  const result = await axios.get(`${BASE_URL}markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`).then(result => result.data)
  return result
}
const getCoin = async (coinId) => {
  const URL = `${BASE_URL}${coinId}`;
  const result = await axios.get(URL).then(result => result.data)
  return result;
}

export { getCoins, getCoin };