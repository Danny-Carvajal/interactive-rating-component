const rateCard = document.querySelector(".rating-card")
const thxCard = document.querySelector(".thanking-card")

const ratingBtns = document.querySelectorAll(".rating-button")
const submitBtn = document.querySelector(".submit-button")
const ratingVar = document.querySelector(".rating-variable")

let selectedValue = 0

ratingBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedValue = btn.textContent
  })
});

submitBtn.addEventListener("click", () => {

  ratingVar.textContent = selectedValue

  rateCard.classList.add("is-hidden")
  thxCard.classList.remove("is-hidden")
})

