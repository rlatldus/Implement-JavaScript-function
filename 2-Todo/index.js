const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const clearButton = document.querySelector('#clear');

function removeLiFromLocalStorage(li) {
  const liList = JSON.parse(localStorage.getItem('liList')) || [];
  const key = liList.findIndex((text) => text === li.innerText + ' ❌');
  if (key >= 0) {
    liList.splice(key, 1);
    localStorage.setItem('liList', JSON.stringify(liList));
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value !== '') {
    const li = document.createElement('li');
    const p = document.createElement('p');
    li.innerText = input.value;
    ul.appendChild(li);
    li.appendChild(p);
    p.innerText = '❌';

    p.addEventListener('click', function (event) {
      removeLiFromLocalStorage(li);
      ul.removeChild(li);
    });

    input.value = '';
    const liList = JSON.parse(localStorage.getItem('liList')) || [];
    liList.push(li.innerText + ' ❌');
    localStorage.setItem('liList', JSON.stringify(liList));
  }
});

clearButton.addEventListener('click', () => {
  localStorage.removeItem('liList');
  ul.innerHTML = '';
});
window.onload = () => {
  const liList = JSON.parse(localStorage.getItem('liList')) || [];

  for (let i = 0; i < liList.length; i++) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    li.innerText = liList[i].slice(0, -5);
    ul.appendChild(li);
    li.appendChild(p);
    p.innerText = liList[i].slice(-2);
    p.addEventListener('click', () => {
      removeLiFromLocalStorage(li);
      ul.removeChild(li);
    });
  }
};
