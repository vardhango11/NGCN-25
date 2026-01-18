import './Blogs.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import BlogList1 from '../../Components/Blogs/BlogList1.jsx';
import BlogList2 from '../../Components/Blogs/BlogList2.jsx';
import blogsData from '../../db/blogs.json';
import featuredBlogsData from '../../db/featured.json';
import mediumFeed from "../../hooks/mediumFeed.json";
import MediumBlogList from "../../Components/Blogs/MediumBlogList.jsx";

const Blogs = () => {
  const [search, setSearch] = useState('');

  // Extract unique categories (kept your logic)
  const allBlogsCombined = [...featuredBlogsData, ...blogsData];

  // Filter featured blogs
  const filteredFeaturedBlogs = featuredBlogsData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description?.toLowerCase().includes(search.toLowerCase()) ||
    blog.category.toLowerCase().includes(search.toLowerCase())
  );

  // Filter medium blogs
  const filteredMediumBlogs = mediumFeed.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description?.toLowerCase().includes(search.toLowerCase())
  );

  // Filter latest blogs
  const featuredIds = featuredBlogsData.map(blog => blog.id);
  const filteredLatestBlogs = blogsData.filter((blog) =>
    !featuredIds.includes(blog.id) &&
    (
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description?.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="blogs-container">
      {/* 1. Hero Header */}
      <div className="header-banner">
        <h1 className="banner-title">Research Blogs</h1>
        <p className="banner-description">
          Insights, discoveries, and perspectives from our research team featuring blogs and Medium publications on cutting-edge technologies.
        </p>
      </div>

      {/* 2. Overlapping Search Card */}
      <div className="controls">
        <div className="search-bar-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* 3. Blog Lists */}
      <div className="blog-list-wrapper">
        {filteredMediumBlogs.length > 0 && (
          <section className="featured-articles">
            {/* <h1>Latest Thinking on Medium</h1> */}
            <MediumBlogList blogs={filteredMediumBlogs} />
          </section>
        )}

        {(filteredFeaturedBlogs.length + filteredLatestBlogs.length) > 0 ? (
          <>
            {/* Add Featured/Latest sections here if needed later */}
          </>
        ) : (
          search.trim() !== '' && (
            <div className="no-blogs-found">
              <svg className="no-blogs-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-6 4h8M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
              </svg>
              <h3 className="no-blogs-title">No Blogs found</h3>
              <p className="no-blogs-text">
                Try adjusting your search terms or browse all blogs by clearing the filter.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Blogs;