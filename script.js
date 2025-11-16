// Set the event date: December 14, 2025 at 00:00:00
const eventDate = new Date('2025-12-14T00:00:00');

// Get DOM elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const countdownElement = document.getElementById('countdown');
const eventMessageElement = document.getElementById('event-message');
const currentYearElement = document.getElementById('current-year');

// Set current year in footer
currentYearElement.textContent = new Date().getFullYear();

// Function to format number with leading zero
function formatTime(value) {
    return value.toString().padStart(2, '0');
}

// Function to update countdown
function updateCountdown() {
    const now = new Date();
    const timeDifference = eventDate - now;
    
    // Check if event has passed
    if (timeDifference <= 0) {
        countdownElement.classList.add('hidden');
        eventMessageElement.classList.remove('hidden');
        return;
    }
    
    // Calculate time units
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Update DOM elements
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
}

// Update countdown immediately
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

