import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/notification.css";
import "../css/myposts.css";

export default function Notification() {
  return (
    <>
      <Header></Header>
      <div className="notification">
        <div>공지사항</div>
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
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
            <div className="notification_list">
              <div>
                <p>1</p>
                <p>제목</p>
              </div>
              <div>
                <p>suhyen</p>
                <p>2024-02-02/16:39</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
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
      </div>
      <Footer></Footer>
    </>
  );
}
