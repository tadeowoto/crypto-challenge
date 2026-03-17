export type Coin = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number | null; 
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number | null; 
    max_supply: number | null;   
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: {
      times: number;
      currency: string;
      percentage: number;
    } | null; 
    last_updated: string;
}



export type CoinMarket = {
  id: string;
  name: string;
  symbol: string;
  asset_platform_id: string | null;
  block_time_in_minutes: number;
  hashing_algorithm: string | null;
  categories: string[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];
  description: Languages; 
  links: Links;       
  image: Images;         
  market_cap_rank: number;
  market_data: MarketData; 
  last_updated: string;
};

type Images = {
  thumb: string;
  small: string;
  large: string;
};

type Languages = {
  en: string;
  es: string;
  [key: string]: string;
};

type Links = {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string | null;
  facebook_username: string | null;
  bitcointalk_thread_identifier: string | null;
  telegram_channel_identifier: string | null;
  subreddit_url: string | null;
  repos_url: {
    github: string[];
    bitbucket: string[];
  };
};

type MarketData = {
  current_price: { [key: string]: number };
  total_value_locked: number | null;
  mcap_to_tvl_ratio: number | null;
  fdv_to_tvl_ratio: number | null;
  roi: number | null;
  ath: { [key: string]: number };
  ath_change_percentage: { [key: string]: number };
  ath_date: { [key: string]: string };
  atl: { [key: string]: number };
  atl_change_percentage: { [key: string]: number };
  atl_date: { [key: string]: string };
  market_cap: { [key: string]: number };
  market_cap_rank: number;
  fully_diluted_valuation: { [key: string]: number };
  market_cap_fdv_ratio: number;
  total_volume: { [key: string]: number };
  high_24h: { [key: string]: number };
  low_24h: { [key: string]: number };
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: { [key: string]: number };
  price_change_percentage_1h_in_currency: { [key: string]: number };
  price_change_percentage_24h_in_currency: { [key: string]: number };
  price_change_percentage_7d_in_currency: { [key: string]: number };
  price_change_percentage_14d_in_currency: { [key: string]: number };
  price_change_percentage_30d_in_currency: { [key: string]: number };
  price_change_percentage_60d_in_currency: { [key: string]: number };
  price_change_percentage_200d_in_currency: { [key: string]: number };
  price_change_percentage_1y_in_currency: { [key: string]: number };
  market_cap_change_24h_in_currency: { [key: string]: number };
  market_cap_change_percentage_24h_in_currency: { [key: string]: number };
  total_supply: number | null;
  max_supply: number | null;
  circulating_supply: number;
  last_updated: string;
};