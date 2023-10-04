const scrollel = document.querySelector(".scrollbutton");

const topq = document.querySelector(".left");

const scrolltopfunction = () => {

    topq.scrollIntoView({ behavior: "smooth" });
}

scrollel.addEventListener("click", scrolltopfunction);