// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true,
});

// Load events dynamically
fetch('events.json')
  .then(response => response.json())
  .then(events => {
    const container = document.getElementById('events-container');
    container.innerHTML = '';

    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-600';
      card.setAttribute('data-aos', 'fade-up');
      card.innerHTML = `
        <h3 class="font-bold text-lg sm:text-xl text-green-700">${event.title}</h3>
        <p class="text-xs sm:text-sm text-gray-500">${event.date}</p>
        <p class="mt-2 text-gray-700 text-sm sm:text-base">${event.description}</p>
      `;
      container.appendChild(card);
    });

    if (AOS) AOS.refresh();
  })
  .catch(error => {
    console.error('Error loading events:', error);
    document.getElementById('events-container').innerHTML =
      '<p class="text-center text-gray-500">No upcoming events right now.</p>';
  });
