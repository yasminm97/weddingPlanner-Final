export interface Provider{
    id: number,
    username: string,
    role: string,
    priceRange: string,
    rating: number,
    reviews: string[],
    isAvailable: boolean,
    isFavorite: boolean,
    image: string,
    works: string[]
  }