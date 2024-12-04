import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BookingForm from "./page/BookingForm"
import Home from "./page/Home"

function App() {

  const appLayout= createBrowserRouter([
   {
    path:"/",
    element:<Home/>
   },
   {
     path:"/booking",
    element:<BookingForm
     />
   },

  ])
  return (
    <>
     <RouterProvider router={appLayout}/>
    </>
  )
}

export default App
