// Set the event date: December 14, 2025 at 00:00:00 (local time)
// Using local timezone to ensure correct countdown calculation
const eventYear = 2025;
const eventMonth = 11; // December (0-indexed: 0=Jan, 11=Dec)
const eventDay = 14;
const eventHour = 0;
const eventMinute = 0;
const eventSecond = 0;
const eventDate = new Date(eventYear, eventMonth, eventDay, eventHour, eventMinute, eventSecond);

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

// Debug: Log event date for verification
console.log('Event date:', eventDate);
console.log('Current date:', new Date());
console.log('Time difference (ms):', eventDate - new Date());

// Update countdown immediately
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Image loading check
window.addEventListener('load', function() {
    const img = document.querySelector('.couple-image');
    if (img) {
        if (img.complete && img.naturalHeight !== 0) {
            console.log('Image loaded successfully');
        } else {
            console.error('Image failed to load');
            img.style.display = 'none';
        }
    }
});

