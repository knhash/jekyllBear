// Carousel logic for life-in-weeks blockquote
(function() {
  let currentIndex = 0;

  // Parse events from embedded JSON
  function loadEventsFromJson() {
    var jsonTag = document.getElementById('life-in-weeks-events-json');
    if (jsonTag) {
      try {
        var jsonStr = jsonTag.textContent.trim();
        window.lifeInWeeksEvents = JSON.parse(jsonStr);
      } catch (e) {
        window.lifeInWeeksEvents = [];
      }
    }
  }

  function getWeekNumberSinceBirth(eventDateStr) {
    // Get start_date from a data attribute on the container
    const container = document.getElementById('life-carousel-container');
    const startDateStr = container ? container.getAttribute('data-start-date') : null;
    if (!startDateStr) return '?';
    const start = new Date(startDateStr);
    const eventDate = new Date(eventDateStr);
    if (isNaN(start) || isNaN(eventDate)) return '?';
    const diffMs = eventDate - start;
    const weekNum = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7)) + 1;
    return weekNum;
  }

  function updateCarousel() {
    const events = window.lifeInWeeksEvents || [];
    const quote = document.getElementById('life-carousel-quote');
    const meta = document.getElementById('life-carousel-meta');
    // Remove pulse from all weeks
    document.querySelectorAll('.week.carousel-pulse').forEach(el => {
      el.classList.remove('carousel-pulse');
    });
    if (!events.length) {
      quote.textContent = 'No events to display.';
      meta.textContent = '';
      return;
    }
    if (currentIndex >= events.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = events.length - 1;
    const event = events[currentIndex];
    const weekNum = getWeekNumberSinceBirth(event.date);
    // Highlight the corresponding week in the grid
    const weekDiv = document.querySelector('.week[data-week-number="' + (weekNum - 1) + '"]');
    if (weekDiv) {
      weekDiv.classList.add('carousel-pulse');
    }
    let main = '';
    if (event.name && event.desc) {
      main = `<span class="carousel-weeknum">Week ${weekNum}</span>: ${event.name}`;
      quote.innerHTML = main;
      meta.textContent = event.desc;
    } else if (event.name) {
      main = `<span class="carousel-weeknum">Week ${weekNum}</span>: ${event.name}`;
      quote.innerHTML = main;
      meta.textContent = '';
    } else if (event.desc) {
      main = `<span class="carousel-weeknum">Week ${weekNum}</span>`;
      quote.innerHTML = main;
      meta.textContent = event.desc;
    } else {
      quote.innerHTML = `<span class="carousel-weeknum">Week ${weekNum}</span>`;
      meta.textContent = '';
    }
  }
  window.updateLifeCarousel = updateCarousel;

  function setupCarousel() {
    loadEventsFromJson();
    document.getElementById('life-carousel-up').addEventListener('click', function() {
      const events = window.lifeInWeeksEvents || [];
      currentIndex = (currentIndex - 1 + events.length) % events.length;
      updateCarousel();
    });
    document.getElementById('life-carousel-down').addEventListener('click', function() {
      const events = window.lifeInWeeksEvents || [];
      currentIndex = (currentIndex + 1) % events.length;
      updateCarousel();
    });
    updateCarousel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCarousel);
  } else {
    setupCarousel();
  }
})();
