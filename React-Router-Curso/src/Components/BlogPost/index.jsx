import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Auth";
import { blogdata } from "./blogdata";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const canRemove = auth?.user?.isAdmin || auth?.user?.username === blogpost.author;

  const returnToBlog = () => {
    navigate("/blog");
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
      {canRemove && <button>Eliminar bogpost</button>}
    </>
  );
}

export { BlogPost };
