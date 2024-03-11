import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/notification.css";
import "../css/hello.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HelloPage() {
  const [postData, setPostData] = useState([
    {
      uid: "",
      title: "",
      nickname: "",
      likes: "",
      viewer: "",
      createdAt: "",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:8080/hello?categoriesUid=1").then((resp) => {
      setPostData(resp.data);
    });
  }, []);

  const boardList = postData.map((data) => {
    return (
      <Link to={"/detailmypost?uid=" + data.uid}>
        <div className="notification_list">
          <div>
            <p>{data.uid}</p>
            <p>{data.title}</p>
          </div>
          <div>
            <p>{data.nickname}</p>
            <p>{data.createdAt}</p>
            <p>{data.likes}</p>
            <p>{data.viewer}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <Header></Header>
      <div className="notification">
        <div>가입 인사</div>
        <div className="notification_box">
          <div className="notification_nav">
            <div>
              <div>
                <p>글번호</p>
                <p>제목</p>
              </div>
              <div className="notification_inf">
                <p>닉네임</p>
                <p>날짜</p>
                <p>좋아요수</p>
                <p>조회수</p>
              </div>
            </div>
            {boardList}
          </div>
        </div>

        <div className="notification_button">
          <button>&lt;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button> &gt;</button>
        </div>
        <div className="hello_button">
          <Link to="/write">
            <button>글쓰기</button>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
