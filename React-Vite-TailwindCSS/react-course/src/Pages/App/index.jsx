import { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import ShoppingCartContext from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Navbar from "../../Components/Navbar";
import MyOrderDetail from "../../Components/MyOrderDetail";
import "./App.css";

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);

  const isSignOut = context.isSignOut;

  let routes = useRoutes([
    {
      path: "/",
      element: !isSignOut ? <Home /> : <Navigate replace to={"/signin"} />,
    },
    {
      path: "/clothes",
      element: !isSignOut ? <Home /> : <Navigate replace to={"/signin"} />,
    },
    {
      path: "/electronics",
      element: !isSignOut ? <Home /> : <Navigate replace to={"/signin"} />,
    },
    {
      path: "/furnitures",
      element: !isSignOut ? <Home /> : <Navigate replace to={"/signin"} />,
    },
    {
      path: "/toys",
      element: !isSignOut ? <Home /> : <Navigate replace to={"/signin"} />,
    },
    {
      path: "/others",
      element: !isSignOut ? <Home /> : <Navigate replace to={"/signin"} />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <MyOrderDetail></MyOrderDetail>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
