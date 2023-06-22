// 무료 강의 👉 https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq
// 이 아래 코드를 작성하세요.
// const rockButton = document
//   .querySelector('.바위')
//   .addEventListener('click', playGame);
// const paperButton = document
//   .querySelector('.보')
//   .addEventListener('click', playGame);
// const scissorsButton = document
//   .querySelector('.가위')
//   .addEventListener('click', playGame);

const button = document
  .querySelectorAll('button')
  .addEventListener('click', (event) => {
    const userChoice = event.target.innerText;
    const computerChoice = () => {
      const choices = ['바위', '보', '가위'];
      return choices[Math.floor(Math.random() * 3)];
    };
    console.log(userChoice, computerChoice);
    
    youText.textContent = userChoice;
    resultText.textContent = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return '비겼습니다.';
      } else if (
        (userChoice === '바위' && computerChoice === '가위') ||
        (userChoice === '보' && computerChoice === '바위') ||
        (userChoice === '가위' && computerChoice === '보')
      ) {
        return '당신이 이겼습니다!';
      } else {
        return '컴퓨터가 이겼습니다!';
      }
    };

    computerText.textContent = computerChoice;
  });



const resultText = document.querySelector('.result');
const computerText = document.querySelector('.computer-choice');
const youText = document.querySelector('.you-choice');
