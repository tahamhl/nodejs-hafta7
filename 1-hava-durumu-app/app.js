const request = require('postman-request')
const forecast = require('./forecast')
const geocode = require('./geocode')

const address = process.argv[2]

if(!address){
    console.log('Lütfen bir adres giriniz.')
} else {
    geocode(address, (error, data = {}) => {
        if(error){
            return console.log(error)
        }

        forecast(data.latitude, data.longtitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(data.location)
            console.log('Bugün hava ' + forecastData.hava + '.')
            console.log('Şu anda sıcaklık ' + forecastData.sicaklik + ' derece ve hissedilen sıcaklık ' + forecastData.hissedilen + ' derece.')
            if(forecastData.yagis === 0){
                console.log('Bugün yağmur yağmayacak.')
            } else if(forecastData.yagis < 10){
                console.log('Bugün hafif yağışlı olacak.')
            } else if (forecastData.yagis <= 25) {
                console.log('Bugün orta şiddetli yağış olacak.')
            } else if (forecastData.yagis <= 50) {
                console.log('Bugün şiddetli yağış olacak.')
            } else if (forecastData.yagis <= 100) {
                console.log('Bugün yağmur fırtınası olacak.')
            } else {
                console.log('Bugün şiddetli yağmur fırtınası olacak.')
            }
        })
    })
} 