import { useAuth } from "../../components/Auth";
import "./styles.css";

function ProfilePage() {
  const auth = useAuth();

  return (
    <section className="profile-page">
      <h1>Proflie</h1>
      <p>Wellcome, {auth?.user?.username}</p>
    </section>
  );
}

export { ProfilePage };
