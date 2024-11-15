import { Layout } from "../../Components/Layout";

function MyAccount() {
  return (
    <>
      <Layout>
        <div className="flex item-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">My account</h1>
        </div>
        <div className="flex flex-col item-center justify-center w-80 mb-4">
          <p>
            <span className="font-light">Name: </span>
            <span className="font-medium">jlcgalvez</span>
          </p>
          <p>
            <span className="font-light">Email: </span>
            <span className="font-medium">jlcgalvez@gmail.com</span>
          </p>
        </div>
        <div className="flex item-center justify-center w-80 mb-4">
          <button className="w-full py-3 bg-white text-black border border-black rounded-lg">
            Edit
          </button>
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;
