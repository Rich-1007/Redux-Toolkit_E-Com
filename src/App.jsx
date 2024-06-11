import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";
// import Home from "./pages/Home";
import Cart from "./pages/Cart";
// import Navbar from "./Components/Navbar";
// import Categories from "./Components/Categories";
// import Slider from "./Components/Slider ";
// import Hero from "./Components/Hero";
// import HomePage from "./Components/HomePage";
import Mainpage from "./Components/Mainpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
