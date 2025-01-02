import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../../Components/Auth";
import { blogdata } from "../../Components/BlogPost/blogdata";


function EditBlogPage() {
  const auth = useAuth();
  const { slug } = useParams();

  const blogpost = blogdata.find((post) => post.slug === slug);

  if (!auth?.user?.isAdmin && auth?.user?.username !== blogpost.author && auth?.user?.role !== "editor"){
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
  }

  return (
    <>
      <h1>Edit Blog {blogpost.title}</h1>
      <form onSubmit={updateBlogPost}>
        <label>Title</label>
        <textarea >{blogpost.title}</textarea>
        <label>Content</label>
        <textarea >{blogpost.content}</textarea>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => window.history.back()}>Go back</button>
    </>
  );
}

export { EditBlogPage };
