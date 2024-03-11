import Header from "../component/Header";
import Footer from "../component/Footer";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/counter/userSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      .post("http://localhost:8080/login", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        localStorage.setItem(
          "accessToken",
          response.headers.get("Authorization")
        );
        dispatch(login());
        navigate("/");
      })
      .catch(() => {
        alert("아이디 비밀번호를 확인해 주세요.");
      });
  };

  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className="loginpage">
          <div className="loginbox">
            <div>Log in</div>
            <div>
              <p>id</p>
              <input
                name="username"
                value={formData.username}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div>
              <p>pw</p>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div className="loginnav">
              <div>
                <input type="checkbox" value="remember"></input>
                <label>remember id</label>
              </div>
              <div>
                <Link to="/signup">sign up</Link>
              </div>
            </div>
            <div>
              <button>Log in</button>
            </div>
            <div>
              <Link to="/findpassword">forgot password</Link>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}
