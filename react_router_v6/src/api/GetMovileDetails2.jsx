import React from 'react'

const getMovileDetails2 = async ({params}) => {
    console.log(params);
    const id = params.movieId;
  try{
   const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=${
    import.meta.env.VITE_API_KEY
    }`
  );
// https://www.omdbapi.com/?i=tt3896198&apikey=d8bd668d&s=titanic&page=1
  //  console.log(response);
   const dataa =response.json();
  
   return dataa;
  }catch(error){
     console.log(error);
  }
}

export default getMovileDetails2
