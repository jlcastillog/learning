import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Auth";
import { blogdata } from "./blogdata";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const canRemove = auth?.user?.isAdmin || auth?.user?.username === blogpost.author;
  const canEdit = auth?.user?.isAdmin || auth?.user?.username === blogpost.author || auth?.user?.role === "editor";

  const returnToBlog = () => {
    navigate("/blog");
  };

  const removeBlogPost = () => {
    // Remove blogpost
    blogdata.splice(blogdata.indexOf(blogpost), 1);
    navigate("/blog");
  }

  const editBlogPost = () => {
    // Edit blogpost
    navigate(`/edit-blog/${blogpost.slug}`);
  } 

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Back to main page blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
      {canEdit && <button onClick={editBlogPost}>Edit bogpost</button>}
      {canRemove && <button onClick={removeBlogPost}>Remove bogpost</button>}
    </>
  );
}

export { BlogPost };
