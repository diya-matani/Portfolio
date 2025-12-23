import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

interface BlogPost {
  title: string;
  platform: string;
  icon: JSX.Element;
  link: string;
  description: string;
}

const blogs: BlogPost[] = [
  // All blog posts commented out — page shows "Coming Soon"
  // {
  //   title: "Make Your Rails Console Look Better",
  //   platform: "Medium",
  //   icon: <FaMedium />,
  //   link: "https://medium.com/@xxxx",
  //   description: "Learn tips to customize your Rails console for a better experience.",
  // },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ Blogs by Diya Matani</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>

      <div className="blogs-grid">
        {blogs.length === 0 ? (
          <div
            className="blog-card no-blogs"
            style={{ '--delay': `0s` } as React.CSSProperties}
          >
            <div className="blog-info animated-text">
              <h3 className="blog-title">No Blog Posts Yet</h3>
              <p className="blog-description">
                Stay tuned! I’m working on some exciting content.
              </p>
              <span className="blog-platform">Coming Soon 🚀</span>
            </div>
          </div>
        ) : (
          blogs.map((blog, index) => (
            <a
              href={blog.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="blog-icon animated-icon">{blog.icon}</div>
              <div className="blog-info animated-text">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <span className="blog-platform">{blog.platform}</span>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
