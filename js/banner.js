'use strict'

// Banner activate

let banner = document.querySelector('.banner');
let mbtn = document.querySelector('.activate');
mbtn.onclick = function () {
    banner.style.display = "flex"
    mbtn.style.display = "none"
}

// Banner work

let container = document.querySelector('.banner__container');
let btn = document.getElementById('spin');
let num = Math.ceil(Math.random()* 10000);

btn.onclick = function () {
    container.style.transition =  "5s";
    container.style.transform = "rotate(" + num + "deg)";
    num += Math.ceil(Math.random() * 10000);
}

// Close banner

let cls_btn = document.querySelector('.banner__close_img');
cls_btn.onclick = function () {
    banner.style.display = "none"
    mbtn.style.display = ""
    container.style.transition =  "0s";
    container.style.transform = "rotate(" + 0 + "deg)";
}
