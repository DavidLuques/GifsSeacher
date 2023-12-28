export const getGifs = async (cate) => {
    try {
      const apiKey = 'hk7BhWyWvz3uXiD1pqYr120WJ2sHAyoV';
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${cate}&limit=10`;
      const resp = await fetch(url);
      const { data } = await resp.json();
      
      const gifs= data.map((gif)=>{return(
          {id:gif.id,
          title:gif.title,
      url:gif.images.downsized_medium.url}
      )})
      console.log(gifs)
      return gifs
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };