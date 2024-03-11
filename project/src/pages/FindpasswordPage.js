import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../css/findpassword.css";
import { useState } from "react";
import axios from "axios";

export default function FindpasswordPage() {
  const navigate = useNavigate();

  const [findData, setFindData] = useState({
    id: "",
    email: "",
    phonenumber: "",
  });

  const handlerInputChange = (e) => {
    const { name, value } = e.target;

    setFindData({
      ...findData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/findpassword", findData, {
        headers: { "Content-type": "application/json" },
      })
      .then((e) => {
        navigate("/newpassword");
      });
  };

  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className="findpassword">
          <div className="findpasswordbox">
            <div>비밀번호 찾기</div>
            <div>
              <p>id</p>
              <input
                name="id"
                value={findData.id}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div>
              <p>e-mail</p>
              <input
                name="email"
                value={findData.email}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div>
              <p>phone number</p>
              <input
                name="phonenumber"
                value={findData.phonenumber}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div>
              <button>찾기</button>
              <button>취소</button>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}
