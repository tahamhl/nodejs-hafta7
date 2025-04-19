// app.js

import { mesaj, selamla } from './birinci.js'
import { tarih, hesapla } from './ikinci.js'
import { rastgeleSayi, diziIslemleri } from './ucuncu.js'

// Birinci modülden fonksiyonları kullanma
console.log(mesaj)
console.log(selamla('Ahmet'))

// İkinci modülden fonksiyonları kullanma
console.log(`Şu anki tarih ve saat: ${tarih()}`)
const hesapSonucu = hesapla(10, 5)
console.log(`Hesaplama sonuçları:`)
console.log(`Toplam: ${hesapSonucu.toplam}`)
console.log(`Fark: ${hesapSonucu.fark}`)
console.log(`Çarpım: ${hesapSonucu.carpim}`)
console.log(`Bölüm: ${hesapSonucu.bolum}`)

// Üçüncü modülden fonksiyonları kullanma
console.log(`1 ile 100 arasında rastgele bir sayı: ${rastgeleSayi(1, 100)}`)
const sayiDizisi = [3, 7, 1, 9, 4, 6]
console.log(`Orijinal dizi: ${sayiDizisi}`)
console.log(`Karıştırılmış dizi: ${diziIslemleri.karistir(sayiDizisi)}`)
console.log(`Dizinin toplamı: ${diziIslemleri.topla(sayiDizisi)}`)
console.log(`Dizinin ortalaması: ${diziIslemleri.ortalama(sayiDizisi)}`) 