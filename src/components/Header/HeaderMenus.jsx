import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TOKEN, token } from "../../config";

function HeaderMenus() {
  const [menuItem, setMenuItem] = useState([]);
  const menuOther = useSelector((state) => state.CATEGORY.list);
  const [nickname, setNickName] = useState("Tài khoản");

  const menuInfo = [
    {
      link: "#",
      name: "Thông tin"
    },
    {
      link: "/changepw",
      name: "Đổi mật khẩu"
    },
    {
      link: "#",
      name: "Bài viết của tôi"
    },
    {
      link: "#",
      name: "Đăng xuất"
    }
  ]

  function infoPerson(menuInfo) {
    let htmlMenuInfor = null;
    if(menuInfo.length > 0) {
      htmlMenuInfor = menuInfo.map((item, index) => {
        const clickLogOut = item.name === "Đăng xuất" ? "clickLogOut" : null
        return (
          <li key={index}><a href={item.link} onClick={clickLogOut}>{item.name}</a></li>
        );
      });
      return htmlMenuInfor
    }
  }
  
    
  useEffect(() => {
    const headers = { 'Authorization': `Bearer ${token}` };
    fetch("https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/users/me", {headers})
    .then((res) => res.json()).then((data) => {
      if (data.nickname !== undefined) {
        setNickName(data.nickname);
      } 
    })
  }, [token]);

  

  useEffect(() => {
    fetch("https://wp-api.codethanhthuongthua.asia/wp-json/menus/v1/menus/main-menu-vi")
    .then((res) => res.json()).then((result) => {
      setMenuItem(result.items);
    })
  }, []);

  if(menuItem.length === 0) return <></>
  let xhtml = menuItem.map((item, index) => (
    <li key={index}>
      <a href="/">{item.post_title}</a>
    </li>
  ))

  // duyệt menu cấp 1
  let itemMenuSubOne = menuOther.map((item, index) => {
    if (index < 4) return (
      <li key={index}>
        <a href="/">{item.name}</a>
      </li>
    )
  })

  //duyệt menu cấp 2
  let itemMenuSubTwo = menuOther.map((item, index) => {
    if (index > 3) return (
      <li key={index}>
        <a href="/">{item.name}</a>
      </li>
    )
  })
  // let itemMenuSubOne = ""; 
  // let itemMenuSubTwo = "";
  // menuOther.forEach((item, index) => {
  //   if (index < 4) {
  //     return itemMenuSubOne = 
  //     ` <li>
  //       <a href="/">${item.name}</a>
  //     </li>`
  //   } else {
  //     return itemMenuSubTwo = 
  //     ` <li>
  //       <a href="/">${item.name}</a>
  //     </li>`
  //   }
  // });

  function onClickLogOut(event) {
    event.preventDefault();
    localStorage.removeItem(TOKEN)
    window.location.href = "/"
  }
  
  return (
    <div className="tcl-col-7">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">
          {xhtml}
          {/* <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Our Team</a>
            <ul>
              <li>
                <a href="/">Our Team 1</a>
              </li>
              <li>
                <a href="/">Our Team 2</a>
              </li>
              <li>
                <a href="/">Our Team 3</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a href="/">Category</a>
            <ul>
              {itemMenuSubOne}
              <li>
                <a href="/">Other</a>
                <ul>
                  {itemMenuSubTwo}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="header-nav__lists">
          <li className="user">
            <a href="/login"><i className="icons ion-person" /> {nickname}</a>
            {/* đoạn code này gọi dc funtion onClickLogOut */}
            {/* <ul id="menuInforLogin">
              <li><a href="/login">Đăng nhập</a></li>
              <li><a href="/register">Đăng ký</a></li>
              <li><a href="#" onClick={onClickLogOut}>Đăng xuất</a></li>
              <li><a href="/changepw">Đổi mật khẩu</a></li>
            </ul> */}
            {/* đoạn code này truyền qua duyệt obj bên trên gọi chưa dc funtion onClickLogOut */}
            <a href="/login"><i className="icons ion-person" /> {nickname}</a>
            <ul>{infoPerson(menuInfo)}</ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
