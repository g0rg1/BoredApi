const url = 'https://bored.api.lewagon.com/api/activity/';
const randomButton = document.getElementById('random');
const activityName = document.getElementById('name');
const participantCount = document.getElementById('partisipant');
const priceCount = document.getElementById('price');
const ActivityType = document.getElementById('type')
const resulDiv = document.getElementById('result-container');
const resultType = document.getElementById('result-type');




randomButton.addEventListener('click' , randomActivity)

async function randomActivity() {
    const response = await fetch(url);
    const data = await response.json();
    resulDiv.style.display = 'grid';
    resultType.innerHTML = 'Result of random Type'
    console.log(data);
    ActivityType.style.display = 'flex';
    activityName.innerHTML = `Activity name:${data.activity}`
    participantCount.innerHTML = `Participants needed:${data.participants}`;
    priceCount.innerHTML = `Price:${data.price}`;
    ActivityType.innerHTML = `Activity type:${data.type}`
}

async function typedActivity(type) {
    const response = await fetch(`http://bored.api.lewagon.com/api/activity?type=${type}`)
    const data = await response.json();
    console.log(data);
    resultType.style.display = 'block'
    resultType.innerHTML = `Result of ${data.type} type`
    resulDiv.style.display = 'grid';
    ActivityType.style.display = 'none';
    activityName.innerHTML = `Activity name:${data.activity}`
    participantCount.innerHTML = `Participants needed:${data.participants}`;
    priceCount.innerHTML = `Price:${data.price}`;
}