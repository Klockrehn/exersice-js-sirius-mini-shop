// Code here!

// 1
const hoodie1 = document.querySelector(".hoodie1");
hoodie1.querySelector("h3").innerHTML = "Potato"; 

// 2
const navBar = document.querySelector("navbar");
navBar.firstElementChild.innerHTML = "Start"; 

// 3
navBar.children["2"].innerHTML = "Mail us"; 

// 4 
const hoodie2 = document.querySelector(".hoodie2");
hoodie2.querySelector("p").innerHTML = "Soft tröja"

// 5 
const button1 = document.querySelector("button1");
button1.innerHTML = "Fungerande knapp"; 
button1.style.backgroundColor = "red"; 

// 6 
hoodie1.style.backgroundColor = "Blue"; 

// 7
const footer = document.querySelector("footer"); 
footer.children["1"].querySelector("p").innerHTML = 
"Sinus skateboards <br> Jerrys väg 13 <br> 420 69, Lund</p>"

// 8
const allPTags = document.querySelectorAll("allPTags"); 
allPTags.forEach((paragraph) => {
paragraph.style.color = "Blue"; 
});

// 9 
const allButtons = document.querySelectorAll("allButons"); 
allButtons.forEach((buttons) => {
    buttons.innerHTML = "Add to cart";
});

// 10
const menuStart = document.querySelector("menuStart"); 
menuStart.classList.add("active");
console.log("menuStart"); 

// 11
const logotyp = document.querySelector("logotyp"); 
logotyp.classList.remove("Logo"); 

// 12
const newMenuOption = document.createElement("a");
newMenuOption.innerHTML = "About"; 
newMenuOption.setAttribute("href", "#"); 
footer.querySelector("article").appendChild(newMenuOption); 

// 13
const productData = {
    img: "hoodie-forrest.png",
    h2: "Sinus Hoodie",
    h3: "Forrest",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."
};

const productContainer = document.querySelector(".product-container");

const productDiv = document.createElement("div");
productDiv.classList.add("product");

const img = document.createElement("img");
img.src = productData.img;
img.alt = `${productData.h2} ${productData.h3}`;
productDiv.appendChild(img);

const h2 = document.createElement("h2");
h2.textContent = productData.h2;
productDiv.appendChild(h2);

const h3 = document.createElement("h3");
h3.textContent = productData.h3;
productDiv.appendChild(h3);

const p = document.createElement("p");
p.textContent = productData.p;
productDiv.appendChild(p);

productContainer.appendChild(productDiv);

// 14
logotyp.addEventListener("click", () => {
    console.log("Found you!");
});

// 15
const articles = products.querySelectorAll("article");
articles[0].setAttribute("id", "Ash");
articles[1].setAttribute("id", "Fire");
articles[2].setAttribute("id", "Water");
articles.forEach(article => {
    article.addEventListener("click", () => {
        console.log("Hi, I´m article " + article.id);
    });
});