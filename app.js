const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');

// Set the date of your birthday
const birthdayDate = new Date('November 26, 2024 12:00:00 GMT+0000').getTime();

// Update the countdown every second
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    d.innerHTML =days + ' Days '
    h.innerHTML =hours + ' Hours '
    m.innerHTML =minutes + ' minutes '
    s.innerHTML =seconds + ' Seconds '
        
  
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Happy Birthday!';
    }
}, 1000);