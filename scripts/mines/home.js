function changeImg(index) {
    if (index == 1) {
        document.getElementById("img1").src = "img/img1.jpg";
        document.getElementById("img2").src = "img/img2.jpg";
        document.getElementById("img3").src = "img/img3.jpg";
        document.getElementById("btn1").classList.remove("on");
        document.getElementById("btn1").classList.add("off");
        document.getElementById("btn2").classList.remove("off");
        document.getElementById("btn2").classList.add("on");
    } else {
        document.getElementById("img1").src = "img/img4.jpg";
        document.getElementById("img2").src = "img/img5.jpg";
        document.getElementById("img3").src = "img/img6.jpg";
        document.getElementById("btn1").classList.remove("off");
        document.getElementById("btn1").classList.add("on");
        document.getElementById("btn2").classList.remove("on");
        document.getElementById("btn2").classList.add("off");
    }
}

function changeBg(index) {
    if (index == 1) {
        document.body.classList.add("gray");
        document.body.classList.remove("white");
        document.getElementById("btn3").classList.remove("on");
        document.getElementById("btn3").classList.add("off");
        document.getElementById("btn4").classList.remove("off");
        document.getElementById("btn4").classList.add("on");
    } else {
        document.body.classList.add("white");
        document.body.classList.remove("gray");
        document.getElementById("btn3").classList.remove("off");
        document.getElementById("btn3").classList.add("on");
        document.getElementById("btn4").classList.remove("on");
        document.getElementById("btn4").classList.add("off");
    }
}