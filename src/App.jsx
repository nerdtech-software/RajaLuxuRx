import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./page/about";
import BookingForm from "./page/BookingForm";
import ContactPage from "./page/ContactPage";
import Home from "./page/Home";
import Vehicles from "./page/Vehicles";


function App() {
  const Layout = () => (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );

  const appRouter = createBrowserRouter([
   {
    path:"/",
    element:<Layout/>,
    children:[
      {
       path:"",
       element:<Home/>
      },
      {
       path:"/booking",
       element:<BookingForm/>
      },
      {
       path:"/about",
       element:<About/>
      },
      {
       path:"/contact",
       element:<ContactPage/>
      },
      {
       path:"/vehicles",
       element:<Vehicles/>
      },
    ]
   }
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
