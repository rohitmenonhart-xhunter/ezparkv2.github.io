// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCKuoLKspUfEKdkexgO7HD9yb0C32lFI9I",
    authDomain: "esp-location-56ece.firebaseapp.com",
    databaseURL: "https://esp-location-56ece-default-rtdb.firebaseio.com",
    projectId: "esp-location-56ece",
    storageBucket: "esp-location-56ece.appspot.com",
    messagingSenderId: "415169225788",
    appId: "1:415169225788:web:0780c061338be738b8cf39",
    measurementId: "G-NP5SHD0WWD"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const dataContainer = document.getElementById('data-container');

// Listen for changes in the 'parkingLocations/availableSlots' node
database.ref('parkingLocations/availableslots').on('value', (snapshot) => {
    console.log('Snapshot:', snapshot.val());
    const availableSlots = snapshot.val();
    renderData(availableSlots);
});


function renderData(availableSlots) {
    // Log the received value
    console.log('Received value:', availableSlots);

    // Clear previous data
    dataContainer.innerHTML = '';

    // Render the new data
    if (availableSlots !== null && availableSlots !== undefined) {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<strong>Available Slots:</strong> ${availableSlots === 0 ? '0' : availableSlots}`;
        dataContainer.appendChild(listItem);
    } else {
        dataContainer.innerHTML = 'No data available';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const mySwiper = new Swiper('.swiper-container', {
        // Optional: Add additional Swiper options here
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});