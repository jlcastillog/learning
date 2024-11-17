import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartContext from "../../Context";
import { Layout } from "../../Components/Layout";
import { saveLogin, isValidUser } from "../../Utils/Storage";

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);

  const isSignOut = context.isSignOut;

  const doLogin = () => {
    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;
    if (isValidUser(email, password)) {
      const user = {
        email: email,
        password: password,
      };
      context.setLoggedUser(user);
      context.setIsSignOut(false);
      saveLogin(false, user);
      setLoginError(false);
      navigate("/");
    } else {
      setLoginError(true);
    }
  };

  const doLogout = () => {
    context.setLoggedUser(null);
    context.setIsSignOut(true);
    saveLogin(false, null);
  };

  return (
    <>
      <Layout>
        <div className="flex item-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Wellcome</h1>
        </div>
        <div className="flex flex-col item-center justify-center w-80 mb-2">
          <p className="font-light mb-2">Email:</p>
          {isSignOut ? (
            <input
              className="border border-black rounded-lg w-80 p-2 mb-4"
              type="text"
              placeholder="example@domian.com"
              id="email"
            />
          ) : (
            <p className="font-medium">{context.loggedUser?.email}</p>
          )}
        </div>
        <div className="flex flex-col item-center justify-center w-80 mb-2">
          <p className="font-light mb-2">Password:</p>
          {isSignOut ? (
            <input
              className="border border-black rounded-lg w-80 p-2 mb-4"
              type="password"
              placeholder="********"
              id="password"
            />
          ) : (
            <p className="font-medium mb-4">
              {context.loggedUser?.password?.replace(/./g, "*")}
            </p>
          )}
        </div>
        {isSignOut ? (
          <div className="flex item-center justify-center w-80 mb-4">
            <button
              className="w-full py-3 bg-black text-white rounded-lg"
              onClick={doLogin}
            >
              Log in
            </button>
          </div>
        ) : (
          <div className="flex item-center justify-center w-80 mb-4">
            <button
              className="w-full py-3 bg-black text-white rounded-lg"
              onClick={doLogout}
            >
              Log out
            </button>
          </div>
        )}
        <div className="flex item-center justify-center w-80 mb-6">
          <p className="font-medium text-sm underline underline-offset-4 cursor-pointer">
            Forgot my password
          </p>
        </div>
        <Link
          to={`/signup`}
          className="flex item-center justify-center w-80 mb-4"
        >
          <button
            className="w-full py-3 bg-white text-black border border-gray-400 rounded-lg"
            disabled={!isSignOut}
          >
            Sign up
          </button>
        </Link>
        {loginError && (
          <div className="flex item-center justify-center w-80 mt-4">
            <p className="font-medium text-red-600">Login fail. Try again</p>
          </div>
        )}
      </Layout>
    </>
  );
}

export default SignIn;
