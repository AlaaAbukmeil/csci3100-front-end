import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/ming/checkout";
import Ming from "../components/ming/credit";
const router = createBrowserRouter([

  {
    path: "/",
    element: <Checkout />,
  },
  {
    path: "/credit",
    element: <Ming />,
  },

]);

export default router;
