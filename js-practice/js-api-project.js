
const latInput = document.querySelector('#lat');
const lonInput = document.querySelector('#lon');
const getGeoBtn = document.querySelector('.get-geo');

getGeoBtn.addEventListener('click', getGeo);

function getGeo() { 
    console.log(latInput.value);
}


fetch("https://api.open-meteo.com/v1/forecast?latitude=46.9480&longitude=7.4481&timezone=GMT&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum")
    .then(response => response.json())
    .then(data => list.insertAdjacentHTML('beforeend', data.map(dat => { 
        return `<li>
                <h2>${dat.latitude} ${dat.longitude}</h2>
                
            </li>`
    }).join('')
    ));



// listMarkup(authors);