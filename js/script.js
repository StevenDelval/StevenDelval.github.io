let portfolio = document.querySelector(".portfolio");

portfolio.addEventListener("click", (e) => {
  if (e.target.classList[0] == "image") {
    for (let notact of portfolio.children) {
      notact.classList.remove("active")
    }
    e.target.classList.add("active")
  }
});


