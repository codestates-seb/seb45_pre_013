import GlobalStyle from "@/styles/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "@/components/Header";
import QuestionDetail from "@/pages/QuestionDetail";
import LoginPage from "@/pages/Login";
import SignUpPage from "@/pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
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
