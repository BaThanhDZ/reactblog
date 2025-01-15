import { useEffect, useState } from 'react'
import Button from '../components/shared/Button'
import Input from '../components/shared/Input'
import { API, token } from '../config'
import { alertSuccess } from '../helpers/toastify'
import './LoginPage/login.css'

function ChangePWPage() {
  //chống vào trang khi chưa đăng nhập
  useEffect(() => {
    const headers = { 'Authorization': `Bearer ${token}` };
    fetch("https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/users/me", {headers})
    .then((res) => res.json()).then((data) => {
      if (data.nickname === undefined) {
        window.location.href = "/"
      } 
    })
  }, [token]);

  const[password, setPassword] = useState({
    password: "",
    new_password: "",
    confirm_new_password: ""
  })


  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setPassword({
      ...password,
      [name]: value
    });
    
  }

  function handleSubmit(event) {
    event.preventDefault()
    setPassword({
      ...password, 
      password: "",
      new_password: "",
      confirm_new_password: ""
    });
    
    const elAlertErr = document.getElementById("alertErr");
    // chưa xử lý dc
    API.put("/wp/v2/users/password", password, {
        headers: { 'Authorization': `Bearer ${token}`}
    }).then((res) => {
      alertSuccess("Thay đổi mật khẩu thành công!")
    })
    .catch((err) => {
        const alertErr = `<div className="alert alert-danger" role="alert">Thông tin chưa chính xác!</div>`
        elAlertErr.innerHTML = alertErr;
    })

    // cách khác
    // fetch("https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/users/password", {
    //   method: "PUT",
    //   body: JSON.stringify(password),
    //   headers: { 'Authorization': `Bearer ${token}`}
    // })
    //   .then(response =>  {
    //     console.log(123);
    //   })
    //   .catch((err) => {
    //       const alertErr = `<div className="alert alert-danger" role="alert">Thông tin chưa chính xác!</div>`
    //       elAlertErr.innerHTML = alertErr;
    //   })
    
  }

  
  


  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đổi mật khẩu</h1>
            <div className="form-login-register">
              <div id="alertErr"></div>
              {/* {alertErr} */}
              <form autoComplete="off">
                <Input 
                  type="text"
                  label="Mật khẩu cũ" 
                  placeholder="Nhập mật khẩu cũ ..."
                  autoComplete="off"
                  name="password"
                  onChange={handleChange}
                  value={password.password}
                />
                <Input 
                  type="text" 
                  label="Mật khẩu mới" 
                  placeholder="Nhập mật khẩu mới ..."
                  autoComplete="off"
                  name="new_password"
                  onChange={handleChange}
                  value={password.new_password}
                />
                <Input 
                  type="text" 
                  label="Xác nhận mật khẩu mới" 
                  placeholder="Nhập lại mật khẩu mới ..."
                  autoComplete="off"
                  name="confirm_new_password"
                  onChange={handleChange}
                  value={password.confirm_new_password}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button onClick={handleSubmit} type="primary" size="large">Xác nhận</Button>
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

export default ChangePWPage