let portfolio = document.querySelector(".portfolio");
console.log(portfolio.children)
portfolio.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target.classList);
  if (e.target.classList[0] == "image") {
    for (let notact of portfolio.children) {
      notact.classList.remove("active")
    }
    e.target.classList.add("active")
  }
});


