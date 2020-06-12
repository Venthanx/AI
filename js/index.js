var navs = document.getElementsByTagName('nav')[0].children;
var pages = document.getElementsByTagName('main')[0].children;

var dlnavs = document.getElementsByClassName('download-nav')[0].children;
var dlcontents = document.getElementsByClassName('dl-contents')[0].children;


// 清除active
function clearActive() {
  for (var i = 0; i < navs.length; i++) {
    navs[i].className = '';
  }
  for (var i = 0; i < pages.length; i++) {
    pages[i].className = '';
  }
}


for (var i = 0; i < navs.length; i++) {
  navs[i].setAttribute("index", i); // 为每一个nav添加索引号

  navs[i].onclick = function () { // 当点中其中一个nav

    clearActive(); // 先清空完active

    this.className = 'nav-active'; // 再为当前的nav添加active

    var index = this.getAttribute("index"); // 获取到当前索引号
    pages[index].className = 'page-active'; // 利用对应索引为对应内容块添加active
  }
}
// 实际原理: 改变class名 nav变底色 page设置显示/隐藏


// 下载页
function dlclearActive() {
  for (var i = 0; i < dlnavs.length; i++) {
    dlnavs[i].className = '';
  }
  for (var i = 0; i < dlcontents.length; i++) {
    dlcontents[i].className = 'dl-content';
  }
}

for (var i = 0; i < dlnavs.length; i++) {
  dlnavs[i].setAttribute("index", i); // 为每一个nav添加索引号

  dlnavs[i].onclick = function () { // 当点中其中一个nav

    dlclearActive(); // 先清空完active

    this.className = 'dlnav-active'; // 再为当前的nav添加active

    var index = this.getAttribute("index"); // 获取到当前索引号
    dlcontents[index].className = 'dl-content dlct-active'; // 利用对应索引为对应内容块添加active
  }
}



// 点击关闭算法窗口

var closebtn = document.getElementsByClassName('close-btn');
var algor = document.getElementsByClassName('algor');

for (let i = 0; i < closebtn.length; i++) {
  closebtn[i].addEventListener('click',function(){
    if (algor[i].style.display = 'block' || (algor[i].style.display = 'none')) {
      algor[i].style.display = 'none';
    } else {
      algor[i].style.display = 'block';
    }
  })
}
