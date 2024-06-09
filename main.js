const ans = document.querySelectorAll(".ans");
const btns = document.querySelectorAll("button");
btns.forEach((button) => {
  const image = button.querySelector("img");
  const images = [
    "assets/images/icon-minus.svg",
    "assets/images/icon-plus.svg",
  ];
  let isFirstImage = true;
  button.addEventListener("click", () => {
    const btn = button.classList.value;
    switch (btn) {
      case "a1":
        ans[0].classList.toggle("open");
        break;
      case "a2":
        ans[1].classList.toggle("open");
        break;
      case "a3":
        ans[2].classList.toggle("open");
        break;
      case "a4":
        ans[3].classList.toggle("open");
        break;
      default:
        break;
    }
    if (isFirstImage) {
      image.src = images[0];
    } else {
      image.src = images[1];
    }
    isFirstImage = !isFirstImage;
  });
});
