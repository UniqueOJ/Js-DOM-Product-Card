const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const grayColor = document.querySelector(".gray");
const imageCard = document.querySelector(".product-image");
const cartButton = document.getElementById("button");
const feedbackBtn = document.querySelector(".feedback");
const itemTag = document.getElementsByTagName("h3")[0];

// red color
redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./images/red-benz.jpg")';
  });

// black color
  blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./images/black-benz.jpg")';
  });

//   gray color
  grayColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("images/gray-benz.jpg")';
  });

//   cart button
  const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
  cartButton.addEventListener("click", cart);
  
//   feedback button
const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
  };
  feedbackBtn.addEventListener("click", feedback);