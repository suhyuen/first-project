import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useSearchParams } from "react-router-dom";
import "../css/detailmypost.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DetailMypostPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [postData, setPostData] = useState([
    {
      title: "",
      categoriesName: "",
      createdAt: "",
      nickname: "",
      likes: "",
      viewer: "",
      content: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/detailmypost?uid=${searchParams.get("uid")}`)
      .then((resp) => {
        setPostData(resp.data);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <div className="detailmypost">
        <div className="mypost_title">
          <p>{postData.title}</p>
          <div>
            <p>
              <span>{postData.categoriesName}</span>
            </p>
            <p>{postData.createdAt}</p>
          </div>
        </div>
        <div className="mypost_nav">
          <p>{postData.nickname}</p>
          <div>
            <p>{postData.likes}</p>
            <p>{postData.viewer} </p>
          </div>
        </div>
        <div
          className="mypost_main"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        ></div>
        <div className="mypost_endbutton">
          <Link to={"/editpost?uid=" + searchParams.get("uid")}>
            <button>수정</button>
          </Link>
          <button>삭제</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
