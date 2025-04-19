const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {
    // Gerçek API URL'si - şu an devre dışı bırakıldı
    // const url = 'http://api.weatherstack.com/current?access_key=e0b0c2fc7c29cd4ce87318d3161d59e7&query=' + latitude + ',' + longtitude + '&units=m'

    // Demo amaçlı, API yanıtını simüle ediyoruz
    setTimeout(() => {
        // Rastgele hava durumu verileri oluştur
        const weatherConditions = ['Güneşli', 'Parçalı Bulutlu', 'Bulutlu', 'Yağmurlu', 'Gök Gürültülü', 'Sisli', 'Karlı']
        const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]
        
        // Bugün için rastgele bir sıcaklık (10-35 derece arası)
        const temperature = Math.floor(Math.random() * 25) + 10
        
        // Hissedilen, gerçek sıcaklığın ±3 derece civarında
        const feelsLike = temperature + (Math.random() * 6 - 3)
        
        // Yağış ihtimali (0-100 arası)
        let precipitation = 0
        if (randomCondition === 'Yağmurlu' || randomCondition === 'Gök Gürültülü') {
            precipitation = Math.floor(Math.random() * 80) + 20
        } else if (randomCondition === 'Parçalı Bulutlu' || randomCondition === 'Bulutlu') {
            precipitation = Math.floor(Math.random() * 20)
        }
        
        callback(undefined, {
            hava: randomCondition,
            sicaklik: Math.round(temperature),
            hissedilen: Math.round(feelsLike * 10) / 10,
            yagis: precipitation
        })
    }, 700) // 700ms gecikme ile gerçek bir API çağrısını simüle ediyoruz
}

module.exports = forecast 