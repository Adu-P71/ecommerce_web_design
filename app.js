const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav ul")
const productImage = document.getElementById("product-img")
const productImages = document.querySelectorAll(".small-img-column img")
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("add-height")
})
productImages.forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.getAttribute("src")
    productImage.setAttribute("src", src)
  })
})
