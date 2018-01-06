const $ = require('jquery');
require('./login.scss');
require('../asset/bootstrap/css/bootstrap.min.css');

$(document).ready(function(){
  let userInfo = localStorage.getItem("JianDiUserInfo");
  if (!userInfo) {
    // location.href = '/login';
  }
})
