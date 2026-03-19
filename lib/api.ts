import { CoinMarket } from "@/types/coins";
import { Coin } from "@/types/coins";
import { ApiError } from "./exceptions";

export const getCoinsById = async (id:string) => {
    
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
      next : {
        revalidate: 60
      }
    });
    if (!response.ok) {


      if(response.status == 404){ 
        throw new ApiError("Coin not found", 404);
      }
      if (response.status === 429) {
      throw new ApiError("Límite de peticiones alcanzado. Reintenta en un minuto.", 429);
      }
      throw new ApiError("Error al obtener los datos de la API.", response.status);
    }

    const data: CoinMarket = await response.json();
    
    return  data
    
}

export const getListCoins = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false', {
    next: {
      revalidate : 60
    }
  })

  if (!response.ok) {

    if(response.status == 404){ 
      throw new ApiError("Coin not found", 404);
    }
    if (response.status === 429) {
    throw new ApiError("Límite de peticiones alcanzado. Reintenta en un minuto.", 429);
    }
    throw new ApiError("Error al obtener los datos de la API.", response.status);
  }

  const data: Coin[] = await response.json();
  
  return data
}