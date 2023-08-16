import GlobalStyle from "@/styles/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/Login";
import SignUpPage from "@/pages/Signup";
import QuestionList from "@/pages/QuestionList";
import QuestionDetail from "@/pages/QuestionDetail";
import QuestionWrite from "@/pages/QuestionWrite";
import Home from "@/pages/Home";
import Root from "@/routers/Root";
import NotFound from "@/pages/NotFound";
import MyPage from "@/pages/MyPage/MyPage";
import EditProfilePage from "@/pages/EditProfile/EditProfile";

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
        path: "Questions/List",
        element: <QuestionList />,
      },
      {
        path: "Questions/:questionId",
        element: <QuestionDetail />,
      },
      {
        path: "/MyPage",
        element: <MyPage />,
      },
      {
        path: "/MyPage/EditProfile",
        element: <EditProfilePage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "Questions/Ask",
    element: <QuestionWrite />,
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
