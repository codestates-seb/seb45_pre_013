import GlobalStyle from "@/styles/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuestionDetail from "@/pages/QuestionDetail";
import LoginPage from "@/pages/Login";
import SignUpPage from "@/pages/Signup";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "QuestionDetail",
    element: <QuestionDetail />,
  },
  {
    path: "Login",
    element: <LoginPage />,
  },
  {
    path: "SignUp",
    element: <SignUpPage />,
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
