import { Link } from 'react-router-dom';
import { blogdata } from '../../components/BlogPost/blogdata'
import "./styles.css";

function BlogPage() {
  return (
    <section className='blog-page'>
      <h1>BlogPage</h1>
      
      <ul>
        {blogdata.map(post => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };