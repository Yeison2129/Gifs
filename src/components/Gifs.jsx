import {useState, useEffect} from 'react'

import {SearchGifs} from "./SearchGifs"


export const Gifs = () => {

  const [img, setImg] = useState([])  
  
   const getGifs =`https://api.giphy.com/v1/gifs/trending?api_key=fObGnpHM7BaIZC0Qn3oh5cAtW60Z4ylC&q&limit=15`

   const gifsTrending = async () => {
    const gifs = await fetch(getGifs)
    const { data } = await gifs.json();
    const gifsTrending = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
    return gifsTrending
   }

   const x = async () => {
    const dates = await gifsTrending()
    setImg(dates)
   }


   useEffect(() => {
    x()
   }, [])


  return(
    <div className='container-gifs'>

      {
        img.map((img) => {
          return <div className='gifsito' key={img.id}>
            <img src={img.url}/>
          </div>
        })
      }      

    </div>
  )
}
