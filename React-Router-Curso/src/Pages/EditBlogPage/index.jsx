import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../../components/Auth";
import { blogdata } from "../../components/BlogPost/blogdata";
import "./styles.css";

function EditBlogPage() {
  const auth = useAuth();
  const { slug } = useParams();

  const blogpost = blogdata.find((post) => post.slug === slug);

  if (
    !auth?.user?.isAdmin &&
    auth?.user?.username !== blogpost.author &&
    auth?.user?.role !== "editor"
  ) {
    return <Navigate to={`/blog/${blogpost.slug}`} />;
  }

  const updateBlogPost = (e) => {
    e.preventDefault();
    // Update blogpost
    blogdata[blogdata.indexOf(blogpost)] = {
      ...blogpost,
      title: e.target[0].value,
      content: e.target[1].value,
    };
  };

  return (
    <section className="edit-blog-section">
      <h1>Edit Blog {blogpost.title}</h1>
      <form onSubmit={updateBlogPost} className="edit-blog-form">
        <div className="form-group">
          <div>
            <label>Title:</label>
          </div>
          <div>
            <textarea>{blogpost.title}</textarea>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label>Content:</label>
          </div>
          <div>
            <textarea>{blogpost.content}</textarea>
          </div>
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
      <button onClick={() => window.history.back()}>Go back</button>
    </section>
  );
}

export { EditBlogPage };
