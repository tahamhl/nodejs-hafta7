const express = require('express')
const path = require('path')

// Express uygulamasını başlat
const app = express()

// Statik dosyaların bulunduğu dizini ayarla
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// Ana sayfa rotası
app.get('', (req, res) => {
    res.send('<h1>Hoş Geldiniz</h1>')
})

// Yardım sayfası rotası
app.get('/help', (req, res) => {
    res.send(`
        <h1>Yardım Sayfası</h1>
        <ul>
            <li>Ana Sayfa: <a href="/">localhost:3000</a></li>
            <li>Yardım: <a href="/help">localhost:3000/help</a></li>
            <li>Hakkımızda: <a href="/about">localhost:3000/about</a></li>
            <li>Hava Durumu: <a href="/weather">localhost:3000/weather</a></li>
        </ul>
    `)
})

// Hakkımızda sayfası rotası
app.get('/about', (req, res) => {
    res.send({
        appName: 'Web Server Uygulaması',
        version: '1.0.0',
        developer: 'Node.js Öğrencisi'
    })
})

// Hava durumu sayfası rotası
app.get('/weather', (req, res) => {
    const konum = req.query.konum || 'İstanbul'
    
    res.send({
        konum: konum,
        sicaklik: 25,
        hissedilen: 28,
        havaDurumu: 'Güneşli'
    })
})

// Sunucuyu başlat
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Sunucu ${port} numaralı portta çalışıyor`)
}) 