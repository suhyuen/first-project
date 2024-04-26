import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/myposts.css";
import "../css/hello.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage() {

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
      .get("http://localhost:8080/")
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
        <div>전체 게시글</div>
        <div className="mypost_box">
          <div>
            <div>
              <p>글번호</p>
              
            </div>
            
          </div>
          {boardList}
        </div>
      </div>
    
      <Footer></Footer>
    </>
  );
}
