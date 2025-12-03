import MediumBlogCard from "./MediumBlogCard";
import "./MediumBlogList.css";

const MediumBlogList = ({ blogs }) => {
  if (!blogs.length) {
    return <p className="no-blogs-message">No Medium blogs found.</p>;
  }

  return (
    <div className="medium-blog-list-grid" role="list">
      {blogs.map((blog) => (
        <div key={blog.id} className="medium-blog-list-item" role="listitem">
          <MediumBlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default MediumBlogList;
