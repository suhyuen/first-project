import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import FindpasswordPage from "./pages/FindpasswordPage";
import MyPage from "./pages/MyPage";
import UserchangePage from "./pages/UserchangePage";
import MypostsPage from "./pages/MypostsPage";
import WritePage from "./pages/WritePage";
import EditpostPage from "./pages/EditpostPage";
import HelloPage from "./pages/HelloPage";
import CommunityPage from "./pages/CommunityPage";
import FuncommunityPage from "./pages/FuncommunityPage";
import OotdPage from "./pages/OotdPage";
import UsedsalesPage from "./pages/UsedsalesPage";
import UsedpurchasePage from "./pages/UsedpurchasePage";
import NewpasswordPage from "./pages/NewpasswordPage";
import WritePage2 from "./pages/WritePage2";
import WritePage3 from "./pages/WritePage3";
import WritePage4 from "./pages/WritePage4";
import WritePage5 from "./pages/WritePage5";
import WritePage6 from "./pages/WritePage6";
import DetailPostPage from "./pages/DetailPostPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/findpassword" element={<FindpasswordPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/change" element={<UserchangePage />}></Route>
        <Route path="/myposts" element={<MypostsPage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/editpost" element={<EditpostPage />}></Route>
        <Route path="/hello" element={<HelloPage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
        <Route path="/funcommunity" element={<FuncommunityPage />}></Route>
        <Route path="/ootd" element={<OotdPage />}></Route>
        <Route path="/usedsales" element={<UsedsalesPage />}></Route>
        <Route path="/usedpurchase" element={<UsedpurchasePage />}></Route>
        <Route path="/newpassword" element={<NewpasswordPage />}></Route>
        <Route path="/write2" element={<WritePage2 />}></Route>
        <Route path="/write3" element={<WritePage3 />}></Route>
        <Route path="/write4" element={<WritePage4 />}></Route>
        <Route path="/write5" element={<WritePage5 />}></Route>
        <Route path="/write6" element={<WritePage6 />}></Route>
        <Route path="/detailpost" element={<DetailPostPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
