const $ = require('jquery');
require('./login.scss');
require('../asset/bootstrap/css/bootstrap.min.css');

$(document).ready(function(){
  let userInfo = localStorage.getItem("JianDiUserInfo");
  if (userInfo) {
    location.href = '/index.html';
  };
  // 用户发送验证码
  $('.sendCode').on('click', function() {
    let userPhone = $('.userPhone').val();
    if ( !userPhone || !(/^1(3|4|5|7|8)\d{9}$/.test(userPhone)) ) {
      alert('请先输入正确的手机号');
      return false;
    }
  })
  // 用户登陆
  $('.submit').on('click', function() {
    let userPhone = $('.userPhone').val();
    let password = $('.password').val();
    if (!userPhone || !password) {
      alert('请确保输入完整');
      return false;
    } else {

    }
  })
})
