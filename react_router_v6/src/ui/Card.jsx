import React from 'react'
import './card.css'
import { NavLink } from 'react-router-dom';

const Card = ({currMovies1}) => {
    const {Title,Year,Poster,imdbID}=currMovies1;
  return (
    <div>
        



<div className="h  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
   <img src={Poster} alt="" />
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Year}</p>
    <NavLink to={`/movie/${imdbID}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <button>Read more</button>
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </NavLink>
</div>


    </div>
  )
}

export default Card