const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const icons = document.querySelectorAll(".icon-clk");
const unames = document.querySelectorAll(".focus");
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", () => {
    unames[i].focus();
  });
}
