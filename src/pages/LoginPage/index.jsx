import "./login.css";
import { Link } from "react-router-dom";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { useEffect, useState } from "react";
import { API, token, TOKEN } from "../../config";
import { alertSuccess } from "../../helpers/toastify";

function LoginPage() {
  // chống vào trang đăng nhập, đăng ký khi đã đăng nhập rồi
  useEffect(() => {
    const headers = { Authorization: `Bearer ${token}` };
    fetch("https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/users/me", {
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.nickname !== undefined) {
          window.location.href = "/";
        }
      });
  }, [token]);

  const [infoLogin, setInfoLogin] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInfoLogin({
      ...infoLogin,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setInfoLogin({
      ...infoLogin,
      username: "",
      password: "",
    });

    // fetch("https://wp-api.codethanhthuongthua.asia/wp-json/jwt-auth/v1/token", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(infoLogin),
    // });

    const elAlertErr = document.getElementById("alertErr");
    API.post("jwt-auth/v1/token", infoLogin)
    .then((res) => {
      const token = res.data.token;
      
      localStorage.setItem(TOKEN, token)
      alertSuccess("Đăng nhập thành công!");
      window.location.href = "/"
    })
    .catch((err) => {
      const alertErr = `<div className="alert alert-danger" role="alert">Thông tin đăng nhập không đúng!</div>`
      elAlertErr.innerHTML = alertErr
    })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              <div id="alertErr"></div>
              {/* {alertErr} */}
              <form autoComplete="off">
                <Input
                  type="text"
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="username"
                  onChange={handleChange}
                  value={infoLogin.username}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  name="password"
                  onChange={handleChange}
                  value={infoLogin.password}
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button onClick={handleSubmit} type="primary" size="large">
                    Đăng nhập
                  </Button>
                  <Link to="/register">Đăng ký</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default LoginPage;
