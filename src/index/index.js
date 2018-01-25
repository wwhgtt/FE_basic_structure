const $ = require('jquery');
require('./index.scss');
require('../asset/bootstrap/css/bootstrap.min.css');

$(document).ready(function(){
  let userInfo = localStorage.getItem("basicUserInfo");
  if (!userInfo) {
    location.href = '/login.html';
  }
})
