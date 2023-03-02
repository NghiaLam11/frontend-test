const feature = document.querySelector(".feature");
const featureImg = document.querySelector(".feature__img");

window.addEventListener("scroll", () => {
  if (window.scrollY > feature.offsetHeight && window.scrollY < 3000) {
    console.log("OKKKK");
    if (window.innerWidth < 1024) {
      featureImg.style.right = 4 + "rem";
    } else {
      featureImg.style.right = 8 + "rem";
    }
  } else {
    featureImg.style.right = -100 + "rem";
  }
});

const end = document.querySelector(".end");
window.addEventListener("scroll", () => {
  if (window.scrollY > end.offsetHeight && window.scrollY < 4200) {
    console.log("OKKKK");
    end.style.left = 0 + "rem";
    end.style.opacity = 1;
  } else  if (window.scrollY > 2600  && window.scrollY < 4200) {
    console.log("OKKKK");
    end.style.left = 0 + "rem";
    end.style.opacity = 1;
  } else {
    end.style.opacity = 0.5;
    end.style.left = 180 + "rem";
  } 
});
console.log(end.offsetHeight)