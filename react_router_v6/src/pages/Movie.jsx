import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../ui/Card';
// import './card.css'
const Movie = () => {
  const moviData=useLoaderData();
  console.log(moviData);
  return (
    <>
      <ul className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 '>
        {moviData.Search.map((currMovies)=> {
        {/* return <Card key={currMovies.imdbID} currMovies1={currMovies}/> */}

        return <Card key={currMovies.imdbID} currMovies1={currMovies}/>
      })}
      </ul>
    </>
  )
}

export default Movie