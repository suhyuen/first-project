import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/myposts.css";
import "../css/hello.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FuncommunityPage() {
  const [postData, setPostData] = useState([
    {
      uid: "",
      title: "",
      user:{nickname: ""},
      likes: "",
      viewer: "",
      createdAt: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/funcommunity?categoriesUid=3")
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
            <p>좋아요 : {data.likes}</p>
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
        <div>유머 게시판</div>
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
        <div className="hello_button">
          <Link to="/write3">
            <button>글쓰기</button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
