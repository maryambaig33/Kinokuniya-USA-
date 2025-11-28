export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  category: string;
  description: string;
  isNew?: boolean;
  rating?: number;
}

export interface RecommendationResponse {
  recommendations: {
    title: string;
    author: string;
    reason: string;
    category: string;
  }[];
}

export type ChatMessage = {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
  recommendations?: RecommendationResponse;
};
