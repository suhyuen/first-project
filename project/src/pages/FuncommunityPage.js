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
      nickname: "",
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
      <Link to={"/detailmypost?uid=" + data.uid}>
        <div className="mypost_content">
          <div>
            <p>{data.uid}</p>
            <div>
              <img src="images" width="82px" height="99px"></img>
            </div>
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
      <div className="mypostspage">
        <div>유머 게시판</div>
        <div className="mypost_box">
          <div>
            <div>
              <p>글번호</p>
              <p>사진</p>
              <p>제목</p>
            </div>
            <div className="post_information">
              <p>닉네임</p>
              <p>날짜</p>
              <p>좋아요수</p>
              <p>조회수</p>
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
