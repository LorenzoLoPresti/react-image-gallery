interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface Artist {
  bio: string;
  name: string;
  id: string;
  instagram_username: string;
  location: string;
}

export interface ImageObjectInterface {
  id: string;
  height: number;
  width: number;
  created_at: string;
  alt_description: string;
  description: string;
  urls: Urls;
  user: Artist;
}

const UNSPLASH_API_KEY = "MW4zPeUx24HV-sVfEgTec13QPzwwBPGkNMGgb0lvnbg";

// Ottiene le immagini dalla API di unplash
export async function getImages() {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/?per_page=16&client_id=${UNSPLASH_API_KEY}`
    );

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch {
    throw new Error("Api Error");
  }
}
