import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './MovieDetails.css'

const MovieDetailes = () => {
  // const parms = useParams(); 
  //    console.log(parms);
  const moviData= useLoaderData();
  console.log(moviData)
  const {Plot,Poster,Title,Awards,imdbRating,imdbVotes,Writer,Director,Released,Type,Runtime,Country,Genre} = moviData;
 const totalMinutes = Runtime.replace("min", "");  // Remove 'min'
const hours = Math.floor(totalMinutes / 60);      // Calculate the number of hours
const minutes = totalMinutes % 60;                // Calculate the remaining minutes

console.log(hours, minutes);

const formattedTime = `${hours}hr ${minutes}min`;
console.log(formattedTime);
  return (
    // <div>MovieDetailes {parms.movieId}</div>
    
    <div>
 
 
 {/* <div className="p-4 md:p-8 max-w-5xl mx-auto"> */}
 <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        
        {/* Product Image */}
        <div className=" poster-img w-full md:w-1/2 flex justify-center items-center p-4 bg-gray-100">
          <img
            src={Poster}
            alt="Wipro Elato Iron"
            className="min-w-full min-h-full object-contain max-h-72"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
          <h1>{Title}</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            {Plot}
             </h2>

            <p className="text-sm text-gray-600 mb-2">
              <a href="#" className="text-blue-600 hover:underline">{Awards}</a>
            </p>

            <div className="flex items-center space-x-2 mb-2">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm text-gray-700">{imdbRating}</span>
              <span className="text-sm text-gray-500">{imdbVotes}</span>
              <span className="text-sm text-gray-500">| {Writer}</span>
            </div>

            <div className="mt-2 mb-4">
              <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">{Director}</span>
            </div>

            <div className="text-2xl font-bold text-red-600 mb-1">{Released}</div>
            <div className="text-lg text-green-600 mb-4">{Type}</div>
            
          </div>

          {/* Offers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="border p-3 rounded">
              <strong>Country :</strong><br />
              {Country}
            </div>
            <div className="border p-3 rounded">
              <strong>Genre :</strong><br />
              {Genre}
            </div>
            <div className="border p-3 rounded sm:col-span-2">
              <strong>Times : </strong><br />
              <span className='text-2xl font-bold text-red-600 mb-1'>{formattedTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MovieDetailes