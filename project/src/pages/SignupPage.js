import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../css/signup.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
    userName: "",
    nickname: "",
    email: "",
    phonenumber: "",
  });

  const handlerInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/signup", formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((e) => {
        navigate("/login");
      });
  };

  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className="signuppage">
          <div className="signup_box">
            <div>sign up</div>
            <div className="signup_list">
              <p>id</p>
              <input
                name="userId"
                value={formData.userId}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div className="signup_list">
              <p>pw</p>
              <input
                type="password"
                name="userPw"
                value={formData.userPw}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div className="signup_list">
              <p>name</p>
              <input
                name="userName"
                value={formData.userName}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div className="signup_list">
              <p>nickname</p>
              <input
                name="nickname"
                value={formData.nickname}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div className="signup_list">
              <p>e-mail</p>
              <input
                name="email"
                value={formData.email}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div className="signup_list">
              <p>phone number</p>
              <input
                name="phonenumber"
                value={formData.phonenumber}
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
