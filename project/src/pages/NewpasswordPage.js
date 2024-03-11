import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../css/findpassword.css";
import { useState } from "react";
import axios from "axios";

export default function NewpasswordPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
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
      .post("http://localhost:8080/Login", formData, {
        headers: { "content-type": "application/json" },
      })
      .then((e) => {
        navigate("/login");
      });
  };
  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className="findpassword">
          <div className="findpasswordbox">
            <div>비밀번호 변경</div>
            <div>
              <p>new password</p>
              <input
                type="password"
                name="new_pw"
                value={formData.password}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div>
              <p>re-new password</p>
              <input
                type="password"
                name="re_new_password"
                value={formData.email}
                onChange={handlerInputChange}
              ></input>
            </div>

            <div>
              <button>변경</button>
              <button>취소</button>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}
