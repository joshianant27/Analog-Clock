const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');

function setClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDegrees = (hours % 12) * 30 + (minutes / 60) * 30;
    const minutesDegrees = (minutes * 6) + (seconds / 60) * 6;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock();
