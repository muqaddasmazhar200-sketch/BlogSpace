
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";

import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import CreateBlog from "./Pages/CreateBlog";
import BlogDetails from "./Pages/BlogDetails";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile";

function App() {

  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem('blogs');

    return savedBlogs ? JSON.parse(savedBlogs) : [
      {
        id: 1,
        title: 'React Basics',
        content: 'Learn React.',
        category: 'Programming',
        status: 'Published'
      },
      {
        id: 2,
        title: 'JavaScript Basics',
        content: 'Learn JavaScript.',
        category: 'Technology',
        status: 'Draft'
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route
         path="/dashboard"
          element={
          <ProtectedRoute>
           <Dashboard blogs={blogs} setBlogs={setBlogs} />
         </ProtectedRoute>
         }
        />
        <Route
          path="/profile"
         element={
        <ProtectedRoute>
            <Profile />
        </ProtectedRoute>
          }
         />
       <Route
         path="/create-blog"
         element={
        <ProtectedRoute>
         <CreateBlog blogs={blogs} setBlogs={setBlogs} />
         </ProtectedRoute>
        }
       />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
