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
    element: <Home />,
  },
  {
    path: "Questions/Ask/",
    element: <QuestionWrite />,
  },
  {
    path: "Questions/",
    element: <Root />,
    children: [
      {
        path: "List/",
        element: <QuestionList />,
      },
      {
        path: ":questionId/",
        element: <QuestionDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "MyPage/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <MyPage />,
      },
      {
        path: "EditProfile/",
        element: <EditProfilePage />,
      },
    ],
  },
  {
    path: "Login/",
    element: <LoginPage />,
  },
  {
    path: "SignUp/",
    element: <SignUpPage />,
  },
  {
    path: "*",
    element: <NotFound />,
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
