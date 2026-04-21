/* ===============================
COMMON HEADER / FOOTER LOADER
================================= */

const page = location.pathname.split("/").pop() || "index.html";

/* PAGE TITLES FOR INNER PAGES */
const titles = {
    "economy.html": "Economy News",
    "politics.html": "Political News",
    "science.html": "Science News",
    "culture.html": "Culture News",
    "sports.html": "Sports News",
    "external-affairs.html": "External Affairs News",
    "trade-and-commerce.html": "Trade & Commerce News"
};

/* ===============================
LOAD HEADER
================================= */

if(page === "index.html"){

    fetch("header-home.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("headerArea").innerHTML = data;
    });

}else{

    fetch("header-inner.html")
    .then(res => res.text())
    .then(data => {

        document.getElementById("headerArea").innerHTML = data;

        setTimeout(() => {
            const titleBox = document.getElementById("pageTitle");

            if(titleBox){
                titleBox.innerText = titles[page] || "News";
            }
        }, 50);

    });
}

/* ===============================
LOAD FOOTER
================================= */

fetch("footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footerArea").innerHTML = data;
});

/* ===============================
ACTIVE NAV LINK (HOME HEADER)
================================= */

setTimeout(() => {

    const links = document.querySelectorAll(".nav a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if(href === page){
            link.classList.add("active");
        }

        if(page === "index.html" && href === "index.html"){
            link.classList.add("active");
        }

    });

}, 300);
