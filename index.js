const timeframeTags = document.querySelectorAll('.time-frame p');

const activityCards = {
  Work: {
    time: document.getElementById('workTime'),
    period: document.getElementById('workPeriod'),
    previous: document.getElementById('workPrevious')
  },
  Play: {
    time: document.getElementById('playTime'),
    period: document.getElementById('playPeriod'),
    previous: document.getElementById('playPrevious')
  },
  Study: {
    time: document.getElementById('studyTime'),
    period: document.getElementById('studyPeriod'),
    previous: document.getElementById('studyPrevious')
  },
  Exercise: {
    time: document.getElementById('exerciseTime'),
    period: document.getElementById('exercisePeriod'),
    previous: document.getElementById('exercisePrevious')
  },
  Social: {
    time: document.getElementById('socialTime'),
    period: document.getElementById('socialPeriod'),
    previous: document.getElementById('socialPrevious')
  },
  'Self Care': {
    time: document.getElementById('careTime'),
    period: document.getElementById('carePeriod'),
    previous: document.getElementById('carePrevious')
  }
};

const timeframeMap = {
  daily: 'Yesterday -',
  weekly: 'Last Week -',
  monthly: 'Last Month -'
};

function updateActivityCards(data, timeframe) {
  data.forEach(activity => {
    const activityData = activityCards[activity.title];
    if (activityData) {
      activityData.time.textContent = `${activity.timeframes[timeframe].current}hrs`;
      activityData.period.textContent = `${timeframeMap[timeframe]} ${activity.timeframes[timeframe].previous}hrs`;
      activityData.previous.textContent = `${activity.timeframes[timeframe].previous}hrs`;
    }
  });
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function dailyClick(data) {
  updateActivityCards(data, 'daily');
}

function weeklyClick(data) {
  updateActivityCards(data, 'weekly');
}

function monthlyClick(data) {
  updateActivityCards(data, 'monthly');
}

function setupEventListeners(data) {
  timeframeTags[0].addEventListener("click", () => dailyClick(data));
  timeframeTags[1].addEventListener("click", () => weeklyClick(data));
  timeframeTags[2].addEventListener("click", () => monthlyClick(data));
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      setupEventListeners(data);
      updateActivityCards(data, 'daily');
    })
    .catch(error => console.error('Error fetching the data:', error));
});
