const date = document.querySelector('.date');
const nowTime = document.querySelector('.time');

setInterval(function () {
    let time = new Date();
    date.innerText = `DATE:: ${time.toLocaleDateString()}`;
    nowTime.innerHTML = `TIME:: ${time.toLocaleTimeString()}`;
}, 1000)


