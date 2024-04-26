import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../css/detailpost.css";
import "../css/detailmypost.css"
import axios from "axios";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function DetailPostPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [postData, setPostData] = useState(
    {
      title: "",
      categoryName: "",
      createdAt: "",
      user: { nickname: "" },
      likeCount: "",
      viewer: "",
      content: "",
    },
  );

  const [commentData, setCommentData] = useState([
    {
      content: "",
      user: { nickname: "" },
      createdAt: "",
      likeCount: "",
    },
  ]);

  const [formCommentData, setFormCommentData] = useState({
    userUid: "",
    postUid: "",
    content: ""
  })
  const handlerInputChange = (e) => {
    const { name, value } = e.target;

    setFormCommentData({
      ...formCommentData,
      [name]: value,
    });
  };

  const commentList = commentData.map((data) => {
    return (
      <div className="comment_list">
        <div>
          {data.content}
        </div>
        <div>
          <p>{data.user.nickname}</p>
          <p>날짜 : {data.createdAt}</p>
          <p>좋아요 : {data.likeCount}</p>
          <div className="comment_list_button">

          </div>
        </div>

      </div>
    )
  })

  useEffect(() => {
    axios
      .get(`http://localhost:8080/detailpost?uid=${searchParams.get("uid")}`)
      .then((resp) => {
        setPostData(resp.data);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post(
      `http://localhost:8080/detailpost/${parseInt(searchParams.get("uid"))}/comments`,

      formCommentData

      ,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      }
    )
      .then((resp) => {
        window.location.reload();
      })
  }

  const handleDeletePost = (uid) => {
    axios
      .post(
        `http://localhost:8080/detailpost/${searchParams.get("uid")}/deletepost`,
        {
          uid: uid,
        },
        {
          headers: { Authorization: localStorage.getItem("accessToken") },
        }
      )
      .then((resp) => {
        alert("게시글이 삭제되었습니다");
        navigate('/myposts');
      })
      .catch((error) => {
        // 오류 처리
        console.error('게시글 삭제 중 오류 발생:', error);
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/detailpost/comments?postUid=${searchParams.get(
          "uid"
        )}`
      )
      .then((resp) => {
        setCommentData(resp.data);
      });
  }, []);






  return (
    <>
      <Header></Header>
      <div className="detailpost">
        <div className="detailpost_title">
          <p>{postData.title}</p>
          <p>
            <span>&lt;{postData.categoryName}&gt;</span>
          </p>

        </div>
        <div className="detailpost_nav">
          <p>{postData.user.nickname}</p>
          <div>
            <p>좋아요 : {postData.likeCount}</p>
            <p>조회 수 : {postData.viewer} </p>
            <p>날짜 : {postData.createdAt}</p>
          </div>
        </div>
        <div
          className="detailpost_main"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        ></div>
        <div className="mypost_endbutton">
          <Link to={"/editpost?uid=" + searchParams.get("uid")}>
            <button>수정</button>
          </Link>
          <button
            onClick={() => {
              handleDeletePost(postData.uid);
            }}
          >삭제</button>
        </div>
        <div className="comment">댓글</div>
        <div className="comment_lists">
          {commentList}
        </div>

        <form class="write_comment" onSubmit={handlesubmit}>
          <ReactQuill className="comment_reactquill"
            style={{ width: "1080px", height: "110px" }}
            theme="snow"
            value={formCommentData.content}
            onChange={(value) =>
              setFormCommentData({ ...formCommentData, content: value })
            }
          />
          <button type="submit">
            등록
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
