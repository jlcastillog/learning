import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartContext from "../../Context";
import { Layout } from "../../Components/Layout";
import { addUser, saveLogin } from "../../Utils/Storage";

function SignUp() {
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // TODO - Validations

    const user = {
      userName: username,
      email: email,
      password: password,
    };

    context.setLoggedUser(user);
    context.setIsSignOut(false);

    saveLogin(false, user);
    addUser(user);

    navigate("/signin");
  };

  return (
    <>
      <Layout>
        <div className="flex item-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Wellcome</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col item-center justify-center w-80 mb-2">
            <p className="font-light mb-2">Your name:</p>
            <input
              className="border border-black rounded-lg w-80 p-2 mb-4"
              type="text"
              placeholder="John"
              id="username"
            />
          </div>
          <div className="flex flex-col item-center justify-center w-80 mb-2">
            <p className="font-light mb-2">Your email:</p>
            <input
              className="border border-black rounded-lg w-80 p-2 mb-4"
              type="text"
              placeholder="example@domian.com"
              id="email"
            />
          </div>
          <div className="flex flex-col item-center justify-center w-80 mb-2">
            <p className="font-light mb-2">Password:</p>
            <input
              className="border border-black rounded-lg w-80 p-2 mb-4"
              type="password"
              placeholder="********"
              id="password"
            />
          </div>
          <div className="flex item-center justify-center w-80 mb-4">
            <button
              className="w-full py-3 bg-black text-white rounded-lg"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
}

export default SignUp;
