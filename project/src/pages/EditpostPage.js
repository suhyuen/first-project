import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../css/write.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditpostPage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (value) => {
    setText(value);
  };
  const [searchParams, setSearchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    uid: searchParams.get("uid"),
    title: "",
    content: "",
  });

  const handlerInputChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/editpost`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      })
      .then((e) => {
        navigate(`/detailmypost?uid=${searchParams.get("uid")}`);
      });
  };
  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className="writepage">
          <div className="writebox">
            <div>글 수정</div>
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
            <button>수정</button>
            <button>취소</button>
          </div>
        </div>
      </form>

      <Footer></Footer>
    </>
  );
}
