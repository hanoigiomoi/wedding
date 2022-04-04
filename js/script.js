var oneDay = 1000 * 60 * 60 * 24;
var oneHours = 1000 * 60 * 60;
var oneMin = 1000 * 60;
var oneSec = 1000;

function start() {
    console.log("start");

    let urlString = window.location.href
    let url = new URL(urlString)
    let param = url.searchParams.get('name')

    khanhmoi = new Map([
        ["duyhung", "Bạn Hùng và người bạn đời"],
    ]);

    if (param == null) {
        document.getElementById('content').innerText = "Bạn và người thương"
    } else {
        if (khanhmoi.get(param) == null) {
            document.getElementById('content').innerText = "Bạn và người thương"
        } else {
            document.getElementById('content').innerText = khanhmoi.get(param)
        }
    }

    countdowTimeNhaGai();
    countdowTimeNhaTrai();
}

start();

document.onclick = function() {
    document.getElementById("my_audio").play();
}

setInterval(function() {
    countdowTimeNhaGai();
    countdowTimeNhaTrai();
}, 1000);

function countdowTimeNhaTrai() {
    let curTime = Date.now();
    let targetTime = new Date(2021, 11, 18, 17, 0, 0, 0);
    let timeStemp = targetTime - curTime;
    let day = getAmountDay(timeStemp);
    let hours = getAmountHours(timeStemp - day * oneDay);
    let min = getAmountMin(timeStemp - day * oneDay - hours * oneHours);
    let sec = getAmountSec(timeStemp - day * oneDay - hours * oneHours - min * oneMin);
    document.getElementById("COUNTDOWN_ITEM426").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${day}</span>`;
    document.getElementById("COUNTDOWN_ITEM427").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${hours}</span>`;
    document.getElementById("COUNTDOWN_ITEM428").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${min}</span>`;
    document.getElementById("COUNTDOWN_ITEM429").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${sec}</span>`;
}

function countdowTimeNhaGai() {
    let curTime = Date.now();
    let targetTime = new Date(2021, 11, 17, 16, 00, 0, 0);
    let timeStemp = targetTime - curTime;
    let day = getAmountDay(timeStemp);
    let hours = getAmountHours(timeStemp - day * oneDay);
    let min = getAmountMin(timeStemp - day * oneDay - hours * oneHours);
    let sec = getAmountSec(timeStemp - day * oneDay - hours * oneHours - min * oneMin);
    document.getElementById("COUNTDOWN_ITEM438").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${day}</span>`;
    document.getElementById("COUNTDOWN_ITEM439").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${hours}</span>`;
    document.getElementById("COUNTDOWN_ITEM440").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${min}</span>`;
    document.getElementById("COUNTDOWN_ITEM441").getElementsByClassName("ladi-countdown-text")[0].innerHTML = `<span>${sec}</span>`;
}


function getAmountDay(stemp) {
    return Math.floor(stemp / oneDay);
}

function getAmountHours(stemp) {
    return Math.floor(stemp / oneHours);
}

function getAmountMin(stemp) {
    return Math.floor(stemp / oneMin);
}

function getAmountSec(stemp) {
    return Math.floor(stemp / oneSec);
}