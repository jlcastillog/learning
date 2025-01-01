import { useParams } from "react-router-dom";
import { blogdata } from "../../Components/BlogPost/blogdata";

function EditBlogPage() {
  const { slug } = useParams();

  const blogpost = blogdata.find((post) => post.slug === slug);

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
