import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const UseFetchGifs = (cate) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const imag = await getGifs(cate);
    setImages(imag);
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, [cate]); // <- Incluye cate en el array de dependencias

  return (
    {
      images: images,
      isLoading: isLoading
    }
  )
}
