// DOM elementlerini seç
const locationInput = document.getElementById('location')
const searchButton = document.getElementById('search-btn')
const weatherResult = document.getElementById('weather-result')

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hava durumu uygulaması hazır')
})

// Arama butonuna tıklandığında
searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim()
    
    if (!location) {
        weatherResult.innerHTML = '<p class="error">Lütfen bir şehir adı giriniz</p>'
        return
    }
    
    weatherResult.innerHTML = '<p>Yükleniyor...</p>'
    
    // Hava durumu API'sine istek gönder
    fetch(`/weather?konum=${location}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                weatherResult.innerHTML = `<p class="error">${data.error}</p>`
            } else {
                // Sonuçları göster
                weatherResult.innerHTML = `
                    <h3>${data.konum}</h3>
                    <p>Hava Durumu: ${data.havaDurumu}</p>
                    <p>Sıcaklık: ${data.sicaklik}°C</p>
                    <p>Hissedilen: ${data.hissedilen}°C</p>
                `
            }
        })
        .catch(error => {
            weatherResult.innerHTML = '<p class="error">Bir hata oluştu. Lütfen tekrar deneyin.</p>'
            console.error('Hata:', error)
        })
})

// Enter tuşu ile arama yapma
locationInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchButton.click()
    }
}) 