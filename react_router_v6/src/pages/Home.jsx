import React from 'react'

const Home = () => {
  return (
    <div>

  <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80')"
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-50 flex flex-col md:flex-row items-center justify-center px-4 md:px-16">
        
        {/* Left Content */}
        <div className="text-white text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
          <p className="text-lg md:text-xl mb-6">
            Discover amazing features and responsive design. Built with Tailwind CSS.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./img3.png"
            alt="Right Side"
            className="rounded-xl shadow-lg w-full max-w-sm"
          />
        </div>

      </div>
    </div>

    </div>
  )
}

export default Home