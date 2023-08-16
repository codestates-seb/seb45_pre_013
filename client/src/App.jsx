import GlobalStyle from "@/styles/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/Login";
import SignUpPage from "@/pages/Signup";
import Home from "@/pages/Home";
import Root from "@/routers/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Login",
        element: <LoginPage />,
      },
      {
        path: "SignUp",
        element: <SignUpPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
