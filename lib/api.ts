import { CoinMarket } from "@/types/coins";
import { Coin } from "@/types/coins";

export const getCoinsById = async (id:string) => {
    
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    if (!response.ok) {
    throw new Error("Something went wrong");
    }

    const data: CoinMarket = await response.json();
    
  return data
    
}

export const getListCoins = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data: Coin[] = await response.json();
  
  return data
}