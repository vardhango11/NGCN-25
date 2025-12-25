import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';

import Home from './Pages/Home/Home.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import BlogPost from './Pages/Blogs/BlogPost.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Gallery from './Pages/Gallery/Gallery.jsx';
import People from './Pages/People/People.jsx';
import Resources from './Pages/Socials/Resources.jsx';
import Publications from './Pages/Publications/Publications.jsx';
import Research from './Pages/Research/Research.jsx';
import Founder from './Pages/Founder/Founder.jsx';
import Internships from './Pages/Internships/Internships.jsx';
import News from './Pages/News/News.jsx';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/about" element={<About />} />          
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/people" element={<People />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/research" element={<Research />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/kesdesikan" element={<Founder />} />
        <Route path="/news" element={<News />} />   
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
