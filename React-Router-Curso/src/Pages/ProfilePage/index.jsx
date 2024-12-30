import { useAuth } from "../../Components/Auth";

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>Proflie</h1>
      <p>Wellcome, {auth?.user}</p>
    </>
  );
}

export { ProfilePage };
