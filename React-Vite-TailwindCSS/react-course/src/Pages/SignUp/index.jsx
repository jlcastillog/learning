import { Layout } from "../../Components/Layout";

function SignUp() {
  return (
    <>
      <Layout>
        <div className="flex item-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Wellcome</h1>
        </div>
        <div className="flex flex-col item-center justify-center w-80 mb-2">
          <p className="font-light mb-2">Your name:</p>
          <input
            className="border border-black rounded-lg w-80 p-2 mb-4"
            type="text"
            placeholder="John"
          />
        </div>
        <div className="flex flex-col item-center justify-center w-80 mb-2">
          <p className="font-light mb-2">Your email:</p>
          <input
            className="border border-black rounded-lg w-80 p-2 mb-4"
            type="text"
            placeholder="example@domian.com"
          />
        </div>
        <div className="flex flex-col item-center justify-center w-80 mb-2">
          <p className="font-light mb-2">Password:</p>
          <input
            className="border border-black rounded-lg w-80 p-2 mb-4"
            type="text"
            placeholder="********"
          />
        </div>
        <div className="flex item-center justify-center w-80 mb-4">
          <button className="w-full py-3 bg-black text-white rounded-lg">
            Create
          </button>
        </div>
      </Layout>
    </>
  );
}

export default SignUp;
