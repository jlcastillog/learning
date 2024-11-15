import { Layout } from "../../Components/Layout";

function SignIn() {
  return (
    <>
      <Layout>
        <div className="flex item-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Wellcome</h1>
        </div>
        <div className="flex flex-col item-center justify-center w-80 mb-4">
          <p>
            <span className="font-light">Email: </span>
            <span className="font-medium">jlcgalvez@gmail.com</span>
          </p>
          <p>
            <span className="font-light">Password: </span>
            <span className="font-medium">123456</span>
          </p>
        </div>
        <div className="flex item-center justify-center w-80 mb-4">
          <button className="w-full py-3 bg-black text-white rounded-lg">
            Log in
          </button>
        </div>
        <div className="flex item-center justify-center w-80 mb-6">
          <p className="font-medium text-sm underline underline-offset-4 cursor-pointer">Forgot my password</p>
        </div>
        <div className="flex item-center justify-center w-80 mb-4">
          <button className="w-full py-3 bg-white text-gray-400 border border-gray-400 rounded-lg">
            Sign up
          </button>
        </div>
      </Layout>
    </>
  );
}

export default SignIn;
