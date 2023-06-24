const buttons = document.querySelectorAll("button");
const resultText = document.querySelector(".result");
const computerText = document.querySelector(".computer-choice");
const youText = document.querySelector(".you-choice");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const userChoice = event.target.innerText;
    const computerChoice = () => {
      const choices = ["바위", "보", "가위"];
      return choices[Math.floor(Math.random() * 3)];
    };

    youText.textContent = userChoice;
    const computerSelection = computerChoice();
    computerText.textContent = computerSelection;

    const result = () => {
      if (userChoice === computerSelection) {
        return "비겼습니다.";
      } else if (
        (userChoice === "바위" && computerSelection === "가위") ||
        (userChoice === "보" && computerSelection === "바위") ||
        (userChoice === "가위" && computerSelection === "보")
      ) {
        return "당신이 이겼습니다!";
      } else {
        return "컴퓨터가 이겼습니다!";
      }
    };

    resultText.textContent = result();
  });
});
