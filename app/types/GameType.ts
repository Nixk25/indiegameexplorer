export type GameType = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  released: string;
  background_image: string;
  playtime: number;
  metacritic: number | null;
  rating: number;
  rating_top: number;
  ratings: {
    id: number;
    title: string;
    count: number;
    percent: number;
  }[];
  ratings_count: number;
  reviews_count: number;
  esrb_rating?: {
    id: number;
    name: string;
    slug: string;
  };
  genres: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  tags: {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
  }[];
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
    released_at?: string;
    requirements?: Record<string, unknown>;
  }[];
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  stores: {
    id: number;
    store: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  short_screenshots: {
    id: number;
    image: string;
  }[];
  dominant_color?: string;
  saturated_color?: string;
  added: number;
  added_by_status?: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing?: number;
  };
  suggestions_count?: number;
  tba: boolean;
  updated: string;
  user_game?: unknown;
};
