// 무료 강의 👉 https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq
// 이 아래 코드를 작성하세요.

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value !== '') {
    const li = document.createElement('li');
    li.innerText = input.value;
    const deleteButton = document.createElement('p');
    deleteButton.innerText = '삭제';
    deleteButton.addEventListener('click', () => {
      ul.removeChild(li);
    });

    ul.appendChild(li);
    li.appendChild(deleteButton);
    input.value = '';

    const liList = JSON.parse(localStorage.getItem('liList')) || [];
    liList.push(li.innerText);
    localStorage.setItem('liList', JSON.stringify(liList));
  }
});

window.onload = () => {
  const liList = JSON.parse(localStorage.getItem('liList')) || [];

  for (let i = 0; i < liList.length; i++) {
    const li = document.createElement('li');
    li.innerText = liList[i];
    ul.appendChild(li);
  }
};
