import './LoginPage/login.css'
import { Link } from "react-router-dom"
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { API, TOKEN, token } from '../config'
import { useEffect, useState } from 'react'
import { alertSuccess } from '../helpers/toastify'

function RegisterPage() {
  // chống vào lại trang đăng nhập, đăng ký khi đã đăng nhập rồi
  useEffect(() => {
    const headers = { 'Authorization': `Bearer ${token}` };
    fetch("https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/users/me", {headers})
    .then((res) => res.json()).then((data) => {
      if (data.nickname !== undefined) {
        window.location.href = "/"
      } 
      
    })
  }, [token]);

  const[infoLogin, setInfoLogin] = useState({
    username: "",
    password: "",
    email: "",
    nickname: ""
  })
  
  
  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInfoLogin({
      ...infoLogin,
      [name]: value
    });
    
  }
  function handleSubmit(event) {
    event.preventDefault()
    setInfoLogin({
      ...infoLogin, 
      username: "",
      password: "",
      email: "",
      nickname: ""
    });

    const elAlertErr = document.getElementById("alertErr")
    API.post("/wp/v2/users/register", infoLogin)
    .then((resRegister) => {
      const dataLogin = {username: infoLogin.username, password: infoLogin.password};
      alertSuccess("Đăng ký tài khoản thành công!")
      
      API.post("jwt-auth/v1/token", dataLogin)
        .then((res) => {
          const token = res.data.token;
          localStorage.setItem(TOKEN, token)
          window.location.href = "/"
        })
    })
    .catch((err) => {
      const alertErr = `<div className="alert alert-danger" role="alert">Thông tin đăng ký không hợp lệ!</div>`
      elAlertErr.innerHTML = alertErr;
    })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <div id="alertErr"></div>
              <form autoComplete="off">
                <Input 
                  label="Email" 
                  placeholder="Nhập Email"
                  autoComplete="off"
                  name="email"
                  onChange={handleChange}
                />
                <Input 
                  label="Nickname" 
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  name="nickname"
                  onChange={handleChange}
                />
                <Input 
                  label="Tên đăng nhập" 
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="username"
                  onChange={handleChange}
                />
                <Input 
                  type="password" 
                  label="Mật khẩu" 
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  name="password"
                  onChange={handleChange}
                />
                {/* <Input 
                  type="password" 
                  label="Xác nhận mật khẩu" 
                  placeholder="Xác nhận mật khẩu ..."
                  autoComplete="new-password"
                  onChange={handleChange}
                /> */}

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button onClick={handleSubmit} type="primary" size="large">Đăng ký</Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}

export default RegisterPage