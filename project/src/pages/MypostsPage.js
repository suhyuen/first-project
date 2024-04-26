import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/myposts.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MypostsPage() {
  const [postData, setPostData] = useState([
    {
      uid: "",
      title: "",
      user:{nickname: ""},
      likeCount: "",
      viewer: "",
      createdAt: "",
    },
  ]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:8080/myposts",
        {},
        {
          headers: { Authorization: localStorage.getItem("accessToken") },
        }
      )
      .then((resp) => {
        setPostData(resp.data);
      });
  }, []);

  const boardList = postData.map((data) => {
    return (
      <Link to={"/detailpost?uid=" + data.uid}>
        <div className="mypost_content">
          <div>
            <p>{data.uid}</p>
            <p>{data.title}</p>
          </div>

          <div>
            <p>닉네임 : {data.user.nickname}</p>
            <p>날짜 : {data.createdAt}</p>
            <p>좋아요 : {data.likeCount}</p>
            <p>조회 수 : {data.viewer}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <Header></Header>
      <div className="mypostspage">
        <div>내가 쓴 게시물</div>
        <div className="mypost_box">
          <div>
            <div>
              <p>글번호</p>
            </div>
            
          </div>
          {boardList}
        </div>
        <div className="mypost_box_button">
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
      </div>
      <Footer></Footer>
    </>
  );
}
