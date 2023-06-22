### Currency_exchange

SVG를 사용하여 간단한 라인효과를 만들었다.

<!-- Stack(기술) -->

### Stack

<p>
<!-- Code logo -->
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
</p>

<br>

### Result <a href="https://yang-ah.github.io/Currency_exchange/">(<u>Link:Click</u>👆🏻)</a>

|                                                           Result                                                           | Description                                                                                                                                                                                                                                                                                                                        |
| :------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div>![SVGAnimation](https://github.com/rlatldus/SVG_practice/assets/122216298/efa77994-61cc-4ef1-8d56-8b247187e1ea)</div> | <h3 style="margin: 0;">A Simple SVG Walkthrough</h3> <h5>✨기능</h5> ▪️ 메인화면에 <b>간단한</b>효과를 구현합니다. <br><br>▪️ 줌을 하거나 크기를 변경할 때 SVG 이미지의 질은 떨어지지 않습니다. <br><br>▪️ IDE나 텍스트 편집기에서 SVG 이미지를 작성하고 수정할 수 있습니다.<br><br>▪️ 파일 크기는 작지만, 확장이 매우 용이합니다. |

<br>

<!-- 기간 -->

### Taken time

<b>period</b> : 14 Apr ~ 16 Apr (during 2 days)
<b>taken time</b> : 10 hours

<br>
<!-- 아키텍쳐 -->

### 느낀점 : SVG는 다양한 형태를 구현할 수 있다.

svg는css에서 기존에 만든 것과 다르게  x와 y를 지정해야 한다는 것을 알았다. 또한 css에서 높이를 vw로 맞춰볼 수 있는 계기가 된 것 같다.



### Function <br>

| Function       | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| changeCurrency | <b>✔️' .currency_li ' click시 실행되는 함수.</b> <br>1️⃣ className에 ' from_li '가 들어있다면, 상단의 ' .exchange_box '로, 아니면 하단으로 구분한다. <br>2️⃣ 클릭한 ' .currency_li '의 innerText를 해당하는 변수(fromCurrency / toCurrency)에 할당한다.<br>3️⃣ 함수 convert를 통해 환전한다. <br> 4️⃣ 함수 changeBtn을 통해 해당하는 변수(fromCurrency / toCurrency)의 값을 적용하여, '.currency_btn'과 unit의 UI를 변경한다. <br> |
| changeUI       | ✔️<b>함수 changeCurrency를 실행하면 실행되는 함수.</b> <br> 1️⃣ type을 전달받아(front/to) 해당하는 '.currency_btn'의 textContent에 currency의 값을 전달해 btn의 UI를 변경한다.<br>2️⃣ 단위를 표시하는 ' .input_box\_\_txt '의 UI를 변경한다.                                                                                                                                                                                     |
| convert        | 🌟<b>Main : exchanging currency</b> <br>✔️from-to, to-from에 필요한 수식을 각 변수에 할당하였다. <br>1️⃣ 전달받은 type에 따라 변수(fromToCurrency / toFromCurrency)를 활용하여 환전한다. <br>2️⃣ toLocaleString()을 통해 1000 단위마다 ,를 찍어준다. <br> &nbsp; &nbsp; &nbsp; - input의 value의 type이 number일 때, 사용할 수 있어, Number로 감싸주었다.                                                                        |

<br>

### 느낀점 : type의 중요성을 알았다.

1️⃣ input을 입력할 때 바로 1000단위마다 콤마가 나타나게 하고 싶었는데, toLocaleString()함수를 적용하게 되면, 값에 콤마를 포함하게 되고 type이 num => string으로 바뀌게 되어, 값을 수정할 때, 오류가 생겼다.

<br>2️⃣ 그래서 input을 하나 더 만들어, 콤마를 찍어주고 수정이 불가하게 만들고 toLocaleString()을 사용하려 하였으나, 사용이 되지 않아 type을 확인해보니 string이었다.

<br>3️⃣ 그래서 Number()를 활용하여 type을 Number로 바꾸고 toLocaleString()을 사용하여 1000단위로 콤마를 찍을 수 있었다.
