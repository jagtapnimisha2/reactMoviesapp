import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import  About from './pages/About';
import Movie from './pages/Movie';
import Contact, { contactData } from './pages/Contact';
import AppLayouts from './layouts/AppLayouts';
import Services from './pages/Services';
import ErrorPages from './layouts/ErrorPages';
import getMovieData from './api/GetApiData';
import MovieDetailes from './ui/MovieDetailes';
import getMovileDetails2 from './api/GetMovileDetails2';


const App = () => {
  const router = createBrowserRouter([
  
  {
     path:"/",
     element:<AppLayouts />,
     errorElement:<ErrorPages />,
     children:[
         {
    path:"/",
    element:<Home />
  },
   {
    path:"/about",
    element:<About />
  },
   {
    path:"/movie",
    element:<Movie />,
    loader:getMovieData
    
  },
  //dynamic route creat movice page ke bad id milgega 
  {
    path:"/movie/:movieId",
    element:<MovieDetailes />,
    loader:getMovileDetails2,
    
  },
  {
   path:"/services",
   element:<Services />
  },
  
   {
    path:"/contact",
    element:<Contact />,
    action:contactData,
  },
     ]
  }, 

  
]);
  return <RouterProvider router={router} />
}

export default App