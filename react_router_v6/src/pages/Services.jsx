import React from 'react'

const Services = () => {
  return (
    <div>
       <div className="bg-gray-900 text-white min-h-screen px-6 py-12 md:px-20">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Movie Services</h1>

      {/* Services Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Service Card 1 */}
        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">🎬 Movie Reviews</h2>
          <p className="text-gray-300">Detailed and honest reviews of the latest releases, indie films, and timeless classics.</p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">📺 Trailers & Teasers</h2>
          <p className="text-gray-300">Watch HD trailers and sneak peeks before you book your tickets or stream online.</p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">🎭 Cast & Crew Details</h2>
          <p className="text-gray-300">Explore profiles, bios, and filmographies of your favorite stars and directors.</p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">⭐ User Ratings</h2>
          <p className="text-gray-300">Rate movies and see what other users think before spending your time watching them.</p>
        </div>

        {/* Service Card 5 */}
        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">📅 Upcoming Releases</h2>
          <p className="text-gray-300">Stay up to date with release schedules for cinema, streaming, and international premieres.</p>
        </div>

        {/* Service Card 6 */}
        <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-2">📌 Watchlist</h2>
          <p className="text-gray-300">Create your own watchlist and track movies you want to see later.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services