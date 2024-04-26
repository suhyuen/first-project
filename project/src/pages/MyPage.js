import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../css/mypage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import UserchangePage from "./UserchangePage";
import { useDispatch } from "react-redux";
import { logout } from "../features/counter/userSlice";

export default function MyPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userName: "",
    userId: "",
    nickname: "",
    email: "",
    phonenumber: "",
  });

  const [postData, setPostData] = useState([
    {
      title: "",
      likes: "",
      viewer: "",
    },
  ]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:8080/mypage",
        {},
        {
          headers: { Authorization: localStorage.getItem("accessToken") },
        }
      )
      .then((resp) => {
        setUserData(resp.data);
        setPostData(resp.data.posts || []);
      });
  }, []);

  const handleDeleteUser = (uid) => {
    axios.post(
      `http://localhost:8080/deleteuser`,
      {
        uid:uid,
      },
      {
        headers: { Authorization: localStorage.getItem("accessToken") },
      }
    )
    .then((resp)=> {
      alert("회원 탈퇴가 완료되었습니다");
      dispatch(logout());
      navigate("/")
    })
    .catch((error) => {
      // 오류 처리 코드 추가
      console.error("오류 발생:", error);
    })
  }

  const boardList = postData.map((data) => {
    return (
      <div className="myposts_lists0">
        <p>{data.title}</p>
        <div>
          <p>{data.likes}</p>
          <p>{data.viewer}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <Header></Header>
      <div className="information">
        <div className="informationbox">
          <div>회원 정보</div>
          <div className="information_lists">
            <div>
              <p>name</p>
              <p>id</p>
              <p>nickname</p>
              <p>e-mail</p>
              <p>number</p>
            </div>
            <div>
              <p>{userData.userName}</p>
              <p>{userData.userId}</p>
              <p>{userData.nickname}</p>
              <p>{userData.email}</p>
              <p>{userData.phonenumber}</p>
            </div>
          </div>
          <div className="myposts">
            <p>내가 쓴 게시물</p>
            <p>
              <Link to="/myposts">모두 보기</Link>
            </p>
          </div>
          <div className="myposts_lists">{boardList}</div>
          <div className="mypost_button">
            <Link to="/change">
              <button>수정</button>
            </Link>
            
              <button onClick={() => {
                handleDeleteUser(userData.uid)
              }}>탈퇴</button>
            
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
