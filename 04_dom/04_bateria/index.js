const data = [
    {
        key: 'w',
        audio: 'tom-1'
    },
    {
        key: 'a',
        audio: 'tom-2'
    },
    {
        key: 's',
        audio: 'tom-3'
    },
    {
        key: 'd',
        audio: 'tom-4'
    },
    {
        key: 'j',
        audio: 'snare'
    },
    {
        key: 'k',
        audio: 'crash'
    },
    {
        key: 'l',
        audio: 'kick'
    },
];



document.querySelectorAll('.drum').forEach(drum => {
    drum.addEventListener('click',
        handleEvent(data.find(item => item.key === drum.classList[0]))
    );
});

document.addEventListener('keydown', (event) => {
    handleEvent(data.find(item => item.key === event.key));
});

const handleEvent = (dataElement) => {
    let audio = new Audio(`sounds/${dataElement.audio}.mp3`);
    let button = document.querySelector(`.${dataElement.key}`);
    audio.play();
    button.classList.add('white');
    setTimeout(() => {
        button.classList.remove('white');
    }, 500);
}

let data2 = {
    "car_make": "Cadillac",
    "car_model": "SRX",
    "car_year": 2008,
    "car_vin": "5UXFB935X3L191041",
    "car_owner": {
        "first_name": "Durante",
        "last_name": "Poleye",
        "age": 71,
        "email": "dpoleye0@telegraph.co.uk",
        "address": {
            "street_number": 3618,
            "street_name": "Monterey",
            "city": "Zhangdian",
            "state": null,
            "postal_code": null
          
      }
  }
}
