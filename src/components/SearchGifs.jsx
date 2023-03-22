import React, { useEffect, useState } from "react";

export const SearchGifs = ({ cat }) => {
  const [img, setImg] = useState([]);
  const getGiffs = `https://api.giphy.com/v1/gifs/search?api_key=fObGnpHM7BaIZC0Qn3oh5cAtW60Z4ylC&q=${cat}&limit=10`;

  const gifsSearch = async () => {
    const gifs = await fetch(getGiffs);
    const { data } = await gifs.json();
    const gifsSearch = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    return gifsSearch;
  };


  const x = async () => {
    const gifs = await gifsSearch();
    setImg(gifs);
  };

  useEffect(() =>{
    setTimeout(() => {
      x()
    },200);
  })



  return (
    <div className="container-gifs">
      {img.map((img) => (
        <div className="gifsito" key={img.id}>
          <img src={img.url} />
        </div>
      ))}
    </div>
  );
};
