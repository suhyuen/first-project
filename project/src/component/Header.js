import { Link } from "react-router-dom";
import "../css/header.css";
import { useState } from "react";
import { userSlice } from "../features/counter/userSlice";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/counter/userSlice";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();

  function handlerMenuopen() {
    setToggleMenu(true);
  }
  function handlerMenuClose() {
    setToggleMenu(false);
  }

  const userInfo = useSelector((state) => state.user);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  };

  return (
    <>
      <header>
        <div className="header1">
          <div className="header1-1">
            <div onMouseOver={handlerMenuopen} onMouseLeave={handlerMenuClose}>
              <img src={`/images/Vector.png`} width="48px" height="48px"></img>
              <div className={toggleMenu ? "header2" : "example"}>
                <ul
                  onMouseOver={handlerMenuopen}
                  onMouseLeave={handlerMenuClose}
                >
                  <Link to="/notification">
                    <li>공지사항</li>
                  </Link>
                  <Link to="/hello">
                    <li>가입 인사</li>
                  </Link>
                  <Link to="/community">
                    <li>일상 게시판</li>
                  </Link>
                  <Link to="/funcommunity">
                    <li>유머 게시판</li>
                  </Link>
                  <Link to="/ootd">
                    <li>나만의 코디</li>
                  </Link>
                  <Link to="/usedsales">
                    <li>중고장터(판매)</li>
                  </Link>
                  <Link to="/usedpurchase">
                    <li>중고장터(구매)</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div>
              <Link to="/">freestyle </Link>
            </div>
          </div>

          <div className="header1-2">
            <div>
              {userInfo.isLoggedIn ? (
                <Link to="/mypage">마이페이지</Link>
              ) : (
                <Link to="/login">로그인</Link>
              )}
            </div>

            <div>
              {userInfo.isLoggedIn ? (
                <Link to="/" onClick={handleLogout}>
                  로그아웃
                </Link>
              ) : (
                <Link to="/signup">회원가입</Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
