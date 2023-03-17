import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Blog from './pages/Blog'



export default function App() {

  useEffect( () => {document.title = 'Arjun Dadhwal - Software Developer'}, []);

  return (
    <main className="text-gray-400 bg-white-100 body-font " >
      <Routes>
        <Route exact path="/arjdad.com" element ={<Home/>} />
        <Route exact path="/arjdad.com/Blog" element = {<Blog/>}  />
      </Routes>
    </main>
  );
}
