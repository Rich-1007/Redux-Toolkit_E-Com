import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";
// import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Main from "./Components/Main";
// import Navbar from "./Components/Navbar";
// import Categories from "./Components/Categories";
// import Slider from "./Components/Slider ";
// import Hero from "./Components/Hero";
// import HomePage from "./Components/HomePage";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
