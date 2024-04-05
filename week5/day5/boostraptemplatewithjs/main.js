const nav = document.createElement("nav");
nav.className = ("navbar navbar-expand-lg navbar-light bg-light")
const containernav = document.createElement("div")
containernav.className = ("container px-4 px-lg-5ner")
nav.append(containernav)
const logo = document.createElement("a");
logo.className=("navbar-brand")
logo.textContent = "Start Bootstrap"
containernav.append(logo)
const navlinks = document.createElement("div");
navlinks.className=("collapse navbar-collapse")
containernav.append(navlinks)
const navul = document.createElement("ul")
navul.classList.add("navbar-nav","me-auto","mb-2","mb-lg-0","ms-lg-4")
navlinks.append(navul)
const navli1=document.createElement("li")
navli1.className=("nav-item")
const nava1=document.createElement("a")
nava1.classList.add("nav-link","active")
nava1.textContent=("Home")
navli1.append(nava1)

const navli2=document.createElement("li")
navli2.className=("nav-item")
const nava2=document.createElement("a")
nava2.classList.add("nav-link","active")
nava2.textContent=("About")
navli2.append(nava2)

const navli3=document.createElement("li")
navli3.className=("nav-item")
const nava3=document.createElement("a")
nava3.classList.add("nav-link","active")
nava3.textContent=("Shop")
navli3.append(nava3)

navul.append(navli1,navli2,navli3)


const navform = document.createElement("form");
navform.className=("d-flex")
navlinks.append(navform)
const navformbtn = document.createElement("button");
navformbtn.classList.add("btn","btn-outline-dark")
navform.append(navformbtn)

const navi =document.createElement("i")
navi.classList.add("bi-cart-fill","me-1")


const btnspan =document.createElement("span")
btnspan.textContent=("Cart")
btnspan.classList.add("cart")

const zerospan=document.createElement("span")
zerospan.className=("badge bg-dark text-white ms-1 rounded-pill")
zerospan.textContent=("0")
navformbtn.append(navi,btnspan,zerospan)

//-----------------------------------------------------------------------------

const header = document.createElement("header");
header.className=("bg-dark py-5")


document.body.appendChild(nav,header)