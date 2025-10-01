import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import BlogPost from './Pages/Blogs/BlogPost';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import People from './Pages/People/People';
import Publications from './Pages/Publications/Publications';
import Research from './Pages/Research/Research';
import Founder from './Pages/Founder/Founder';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/people" element={<People />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/research" element={<Research />} />
      <Route path="/founder" element={<Founder />} />
      <Route path="*" element={<Navigate to="/" replace />} /> {/* Catch-all route */}
    </Routes>
  );
}

export default App;
