const correctAnswers = ["A", "A", "A", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

// console.log(questions[0]);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event);
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];
  //   console.log(userAnswers);
  userAnswers.forEach((answer, index) => {
    // console.log(answer, index);
    if (answer === correctAnswers[index]) {
      score += 1;
      //   console.log("COrrect Answer", index);
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });
  console.log(score);
  // go the top position once we submit
  scrollTo(0, 0);
  result.classList.remove("hide");
  // selects only first p and display content we like
  result.querySelector("p").textContent = `Your score is ${score}/5`;
});
