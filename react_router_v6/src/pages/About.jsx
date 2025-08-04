import React from 'react'

const About = () => {
  return (
    <div>
         <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 md:h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('./img1.png')" }}
      >
        <div className="bg-black bg-opacity-60 p-4 md:p-8 rounded">
          <h1 className="text-3xl md:text-5xl font-bold text-center">Welcome to MovieWorld</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">About Us</h2>
        <p className="text-gray-300 text-lg mb-6 text-justify">
          MovieWorld is your go-to platform for discovering new movies, reading honest reviews, watching trailers, and exploring detailed information about your favorite films and stars. We aim to be the IMDb of tomorrow with a user-friendly design and rich features.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 text-gray-200">
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Latest Releases</h3>
            <p>Stay updated with the newest blockbusters and trending content worldwide.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Movie Database</h3>
            <p>Browse through our growing collection of movie info, from classics to new-gen.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">User Reviews</h3>
            <p>Read real reviews from movie lovers and add your own to share your views.</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default About