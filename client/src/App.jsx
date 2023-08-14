import GlobalStyle from "@/styles/global";
import MyPageProfile from "./components/MyPage/MyPagePreview";
import MyPageContent from "./components/MyPage/MyPageContent";
import MyPage from "./pages/MyPage/MyPage";
function App() {
  return (
    <>
      <GlobalStyle />
      {/* <MyPageProfile /> */}

      <MyPage></MyPage>
    </>
  );
}

export default App;
