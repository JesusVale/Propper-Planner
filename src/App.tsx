import "./output.css";
import Root from "./pages/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Calendary from "./pages/calendary";
import Routine from "./pages/routine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Calendary />
      },
      {
        path: "/routine",
        element: <Routine />
      }
    ]
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
