const request = require('postman-request')

const geocode = (address, callback) => {
    // Gerçek API URL'si - şu an devre dışı bırakıldı çünkü API anahtarı çalışmıyor
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieW91cnRva2VuIiwiYSI6ImNreW91cmtleTEyM3gyb215ODU2In0.MDN8CCfgRYZFJpGf_jOESQ&limit=1'

    // Demo amaçlı, API yanıtını simüle ediyoruz
    setTimeout(() => {
        // API çağrısını simüle et
        const mockLocations = {
            'istanbul': {
                latitude: 41.0082,
                longtitude: 28.9784,
                location: 'İstanbul, Türkiye'
            },
            'ankara': {
                latitude: 39.9334,
                longtitude: 32.8597,
                location: 'Ankara, Türkiye'
            },
            'izmir': {
                latitude: 38.4237,
                longtitude: 27.1428,
                location: 'İzmir, Türkiye'
            },
            'default': {
                latitude: 41.0082,
                longtitude: 28.9784,
                location: address + ', Türkiye'
            }
        }

        const lowerCaseAddress = address.toLowerCase()
        const locationData = mockLocations[lowerCaseAddress] || mockLocations.default

        callback(undefined, locationData)
    }, 500) // 500ms gecikme ile gerçek bir API çağrısını simüle ediyoruz
}

module.exports = geocode 