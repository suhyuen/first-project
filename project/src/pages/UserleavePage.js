import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/userleave.css";
import "../css/signup.css";

export default function UserleavePage() {
  return (
    <>
      <Header></Header>
      <form>
        <div className="userleave">
          <div className="userleavebox">
            <div>회원 탈퇴</div>
            <div className="signup_list">
              <p>id</p>
              <input type="text"></input>
            </div>

            <div className="signup_list">
              <p>pw</p>
              <input type="text"></input>
            </div>
            <div className="signup_list">
              <p>check pw</p>
              <input type="text"></input>
            </div>
            <div className="signup_button">
              <button>확인</button>
              <button>취소</button>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}
