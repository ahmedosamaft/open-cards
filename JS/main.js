const allCards = document.querySelectorAll(".panel");

const changeRes = (ev) => {
  allCards.forEach((e) => {
    e.classList.remove("active");
  });
  if (ev.target.getAttribute("class") == "panel") {
    ev.target.classList.add("active");
  }
};

addEventListener("click", changeRes);

//Another Solution

/*
allCards.forEach((card) => {
  card.addEventListener('click', _ => {
    removeActive()
    card.classList.add('active')
  })
})

const removeActive = _ => {
  allCards.forEach(card => card.classList.remove('active'))
}
*/
