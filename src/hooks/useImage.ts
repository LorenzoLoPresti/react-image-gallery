import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../context/useAppContext";

// Ritorna il dal context, l'index salvato come
// stato, isOpen e la funzione per il toggle
// e le funzioni per
// passare all'immagine prev/next
export const useImage = (id: number) => {
  const { images, isLoading, error } = useAppContext();
  const [indexImg, setIndexImg] = useState<number>(id);
  const [isOpen, setIsOpen] = useState(false);

  // uso useCallback perchè dovrò usare queste
  // funzioni in un array di dipendenze di
  // uno useEffect. Senza re-renderizzerei il
  // componente all'infinito
  const nextImg = useCallback(() => {
    if (indexImg + 1 > images?.length - 1) {
      setIndexImg(0);
      return;
    }
    setIndexImg((n) => n + 1);
  }, [indexImg, images?.length]);

  const prevImg = useCallback(() => {
    if (indexImg < 1) {
      setIndexImg(images.length - 1);
      return;
    }

    setIndexImg((n) => n - 1);
  }, [indexImg, images?.length]);

  // toggle isOpen
  const handleOpen = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  useEffect(function () {}, []);

  return {
    isLoading,
    error,
    indexImg,
    images,
    nextImg,
    prevImg,
    isOpen,
    handleOpen,
  };
};
