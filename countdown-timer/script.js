const daysEl =  document.getElementById('days')
const hoursEl =  document.getElementById('hours')
const minuteEl =  document.getElementById('minute')
const secondEl =  document.getElementById('second')





const newSongkarn = '13/april/2023';

function countdown() {
    const newSongkarnDate = new Date(newSongkarn);
    const currentDate = new Date();
    
    const totalseconds = (newSongkarnDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds/60)% 60;
    const seconds = Math.floor(totalseconds)% 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minuteEl.innerHTML = formatTime(minutes);
    secondEl.innerHTML = formatTime(seconds);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
}

countdown();

setInterval(countdown,1000);