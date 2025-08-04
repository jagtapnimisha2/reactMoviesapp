import React from 'react'

const getMovieData = async () => {
  try{
   const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=${
    import.meta.env.VITE_API_KEY
    }&s=titanic&page=1`
  );
// https://www.omdbapi.com/?i=tt3896198&apikey=d8bd668d&s=titanic&page=1
  //  console.log(response);
   const dataa =response.json();
  
   return dataa;
  }catch(error){
     console.log(error);
  }
}

export default getMovieData
