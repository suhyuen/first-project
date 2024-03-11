import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../css/write.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";

export default function WritePage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (value) => {
    setText(value);
  };

  const [formData, setFormData] = useState({
    categoriesUid: 1,
    title: "",
    content: "",
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
      .post("http://localhost:8080/write", formData, {
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      })
      .then((e) => {
        navigate("/myposts");
      });
  };
  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className="writepage">
          <div className="writebox">
            <div className="writebox_title">
              <p>글 쓰기</p>
              <p>가입 인사</p>
            </div>

            <div className="App">
              <input
                type="text"
                placeholder="제목입니다"
                name="title"
                value={formData.title}
                onChange={handlerInputChange}
              ></input>
              <div className="editor-container">
                <ReactQuill
                  theme="snow" // Snow theme 사용 (기본 테마)
                  value={formData.content}
                  onChange={(value) =>
                    setFormData({ ...formData, content: value })
                  }
                  placeholder="여기에 텍스트를 입력하세요..."
                  style={{ height: "486px", width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="write_button">
            <button>작성</button>
            <button>취소</button>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}
