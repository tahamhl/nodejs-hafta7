// ikinci.js

const tarih = () => {
    return new Date().toLocaleString('tr-TR')
}

const hesapla = (sayi1, sayi2) => {
    return {
        toplam: sayi1 + sayi2,
        fark: sayi1 - sayi2,
        carpim: sayi1 * sayi2,
        bolum: sayi1 / sayi2
    }
}

export { tarih, hesapla } 