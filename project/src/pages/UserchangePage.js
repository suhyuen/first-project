import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../css/userchange.css";
import "../css/signup.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function UserchangePage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userId: "",
    nickname: "",
    email: "",
    phonenumber: "",
  });

  const handlerInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    axios
      .post("http://localhost:8080/change", userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      })
      .then((e) => {
        navigate("/mypage");
      });
  };

  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className="userchange">
          <div className="userchangebox">
            <div>회원 정보 수정</div>
            <div className="signup_list">
              <p>id</p>
              <input
                name="userId"
                value={userData.userId}
                onChange={handlerInputChange}
              ></input>
            </div>

            <div className="signup_list">
              <p>nickname</p>
              <input
                name="nickname"
                value={userData.nickname}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div className="signup_list">
              <p>e-mail</p>
              <input
                name="email"
                value={userData.email}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div className="signup_list">
              <p>phone number</p>
              <input
                name="phonenumber"
                value={userData.phonenumber}
                onChange={handlerInputChange}
              ></input>
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
