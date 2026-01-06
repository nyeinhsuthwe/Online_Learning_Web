export interface Card {
  _id: string;
  category_id: string;
  title: string;
  topics: string[];
  price: number;
  description: string;
  thumbnailUrl: string;
  createdAt: string; 
  updatedAt: string; 
  __v: number;
}

export interface CardApiResponse {
  data: Card[];
}

