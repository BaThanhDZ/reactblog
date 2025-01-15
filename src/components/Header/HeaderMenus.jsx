import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TOKEN, token } from "../../config";
import { fetchMenu, fetchNickname } from "../../store/menuSlice";

function HeaderMenus() {
  const menuItem = useSelector((state) => state.MENU.menuItem);  
  const nickName = useSelector((state) => state.MENU.nickName);
  const dispatch = useDispatch();

  const menuInfo = [
    {
      link: "#",
      name: "Thông tin",
    },
    {
      link: "/changepw",
      name: "Đổi mật khẩu",
    },
    {
      link: "#",
      name: "Bài viết của tôi",
    },
    {
      link: "#",
      name: "Đăng xuất",
    },
  ];

  function infoPerson(menuInfo) {
    let htmlMenuInfor = null;
    if (menuInfo.length > 0) {
      htmlMenuInfor = menuInfo.map((item, index) => {
        const clickLogOut =
          item.name === "Đăng xuất" ? "onClickLogOut" : () => {};
        return (
          <li key={index}>
            <a href={item.link} onClick={clickLogOut}>
              {item.name}
            </a>
          </li>
        );
      });
      return htmlMenuInfor;
    }
  }
  if(token !== null) {
    useEffect(() => {
      dispatch(fetchNickname(token));
    }, [token]);
  }

  // for (let i = 0; i < menuItem.length; i++) {
  //   const subMenu = menuItem[i].child_items;
  //   console.log(subMenu);
  // }
  
  
  
  

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  if (menuItem.length === 0) return <></>;
  let xhtml = menuItem.map((item, index) => (
    <li key={index}>
      <Link to="/">{item.post_title}</Link>
    </li>
  ));

  function onClickLogOut(event) {
    event.preventDefault();
    localStorage.removeItem(TOKEN);
    window.location.href = "/";
  }

  return (
    <div className="tcl-col-7">
      <div className="header-nav">
        <ul className="header-nav__lists">
          {xhtml}
          <li>
            <a href="/">Category</a>
            <ul>
              {/* {menu 2} */}
              <li>
                <a href="/">Other</a>
                <ul>{/* {menu 3} */}</ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="header-nav__lists">
          <li className="user">
            <a href="/login"><i className="icons ion-person" />{nickName}</a>
            <ul id="menuInforLogin">
              <li>
                <a href="/login">Đăng nhập</a>
              </li>
              <li>
                <a href="/register">Đăng ký</a>
              </li>
              <li>
                <a href="#" onClick={onClickLogOut}>
                  Đăng xuất
                </a>
              </li>
              <li>
                <a href="/changepw">Đổi mật khẩu</a>
              </li>
            </ul>
            {/* đoạn code này truyền qua duyệt obj bên trên gọi chưa dc funtion onClickLogOut */}
            {/* <a href="/login"><i className="icons ion-person" /> {nickname}</a>
            <ul>{infoPerson(menuInfo)}</ul> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
