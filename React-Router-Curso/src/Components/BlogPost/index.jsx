import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Auth";
import { blogdata } from "./blogdata";
import "./styles.css";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const canRemove =
    auth?.user?.isAdmin || auth?.user?.username === blogpost.author;
  const canEdit =
    auth?.user?.isAdmin ||
    auth?.user?.username === blogpost.author ||
    auth?.user?.role === "editor";

  const returnToBlog = () => {
    navigate("/blog");
  };

  const removeBlogPost = () => {
    // Remove blogpost
    blogdata.splice(blogdata.indexOf(blogpost), 1);
    navigate("/blog");
  };

  const editBlogPost = () => {
    // Edit blogpost
    navigate(`/edit-blog/${blogpost.slug}`);
  };

  return (
    <section className="blogpost-section" >
      <h2>{blogpost.title}</h2>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
      <div className="edition-buttons-section" >
        {canEdit && <button onClick={editBlogPost}>Edit blog post</button>}
        {canRemove && <button onClick={removeBlogPost}>Remove blog post</button>}
      </div>
      <div className="back-button-section" >
        <button onClick={returnToBlog}>Back to main page blog</button>
      </div>
    </section>
  );
}

export { BlogPost };
