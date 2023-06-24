
const clock = document.querySelector('#clock');

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clock.textContent = `${hours < 10 ? '0' : ''}${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// 매 초마다 updateTime() 함수를 호출하여 현재 시간을 갱신합니다.
setInterval(updateTime, 1000);
