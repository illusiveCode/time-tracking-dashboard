// Variables for the timeframe selectors
const dailyTag = document.getElementById('dailyTag');
const weeklyTag = document.getElementById('weeklyTag');
const monthlyTag = document.getElementById('monthlyTag');

// Variables for the Work card
const workTime = document.getElementById('workTime');
const workPeriod = document.getElementById('workPeriod');
const workPrevious = document.getElementById('workPrevious');

// Variables for the Play card
const playTime = document.getElementById('playTime');
const playPeriod = document.getElementById('playPeriod');
const playPrevious = document.getElementById('playPrevious');

// Variables for the Study card
const studyTime = document.getElementById('studyTime');
const studyPeriod = document.getElementById('studyPeriod');
const studyPrevious = document.getElementById('studyPrevious');

// Variables for the Exercise card
const exerciseTime = document.getElementById('exerciseTime');
const exercisePeriod = document.getElementById('exercisePeriod');
const exercisePrevious = document.getElementById('exercisePrevious');

// Variables for the Social card
const socialTime = document.getElementById('socialTime');
const socialPeriod = document.getElementById('socialPeriod');
const socialPrevious = document.getElementById('socialPrevious');

// Variables for the Self Care card
const careTime = document.getElementById('careTime');
const carePeriod = document.getElementById('carePeriod');
const carePrevious = document.getElementById('carePrevious');

document.addEventListener('DOMContentLoaded', () => {
  // Fetch the JSON data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      setupEventListeners(data);
      // Example: Update the UI with the fetched data
    })
    .catch(error => console.error('Error fetching the data:', error));
});

function setupEventListeners() {
  dailyTag.addEventListener('click', () => handleClick('daily'));
  weeklyTag.addEventListener('click', () => handleClick('weekly'));
  monthlyTag.addEventListener('click', () => handleClick('monthly'));
}

function handleClick(timeframe) {
  if (timeframe == 'daily')
  console.log(`Clicked on ${timeframe}`);
}



