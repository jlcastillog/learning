import { useAuth } from "../../components/Auth";

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>Proflie</h1>
      <p>Wellcome, {auth?.user?.username}</p>
    </>
  );
}

export { ProfilePage };
