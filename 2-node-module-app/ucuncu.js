// ucuncu.js

const rastgeleSayi = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const diziIslemleri = {
    karistir: (dizi) => {
        const yeniDizi = [...dizi]
        for (let i = yeniDizi.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[yeniDizi[i], yeniDizi[j]] = [yeniDizi[j], yeniDizi[i]]
        }
        return yeniDizi
    },
    topla: (dizi) => {
        return dizi.reduce((toplam, sayi) => toplam + sayi, 0)
    },
    ortalama: (dizi) => {
        return dizi.reduce((toplam, sayi) => toplam + sayi, 0) / dizi.length
    }
}

export { rastgeleSayi, diziIslemleri } 