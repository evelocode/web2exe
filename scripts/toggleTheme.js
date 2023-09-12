const updateImage = (image, link) => {
  image.src = link;
}

const toggleTheme = () => {
  var themeTogglerImage = document.getElementById("theme_toggler");
  themeTogglerImage.classList.toggle('theme-change-toggle')
  const body = document.querySelector("body");
  body.classList.toggle('darkbody')
  //toggle image
  var homeImg1 = document.getElementsByClassName('hero_image')[0]
  homeImg1.classList.toggle('hero_image-left')
  homeImg1 = document.getElementsByClassName('hero_image')[1]
  homeImg1.classList.toggle('hero_image-left')
}

const themeToggler = document.getElementById("theme_toggler");
themeToggler.addEventListener("click", toggleTheme);
