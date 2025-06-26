let isClear = false;
let i = 2;

const button = document.getElementById('imageButton');
const image = document.getElementById('buttonImage');
const probability = document.getElementById('currentProbability');

// 押してる間の画像
button.addEventListener('mousedown', () => {
    if(!isClear){
        image.src = 'image/button_on.png';
    }
});

// 離したときの画像
button.addEventListener('mouseup', () => {
    if(!isClear){
        image.src = 'image/button_off.png';
    }
});

// マウスがボタンから外れても戻す
button.addEventListener('mouseleave', () => {
    if(!isClear){
        image.src = 'image/button_off.png';
    }
});

// ボタンを押したとき
button.addEventListener('click', () => {
    r = Math.floor(Math.random() * i) + 1;
    if(r == 1){
        isClear = true;
        const se = new Audio('sound/clear.mp3');
        se.play();
        image.src = 'image/money.png';
        probability.innerText = 'おめでとう!あなたは1億円を手に入れた!';
        button.disabled = true;
    }else{
        i = i*2;
        probability.innerText = '現在の確率: 1/' + String(i);
    }
    console.log(r,i/2);
})