// Gonderi Verileri
const gonderiTarihi = document.getElementById('gonderi_tarih')
const gonderiCiro = document.getElementById('gonderi_ciro')
const gonderiKomisyon = document.getElementById('gonderi_komisyon')
const gonderiPaketSayisi = document.getElementById('gonderi_paket_sayisi')
const gonderiReklam = document.getElementById('gonderi_reklam')
const gonderiKargo = document.getElementById('gonderi_kargo')
const gonderiUrunMaliyeti = document.getElementById('gonderi_urun_maliyet')
const iadeKargo = document.getElementById('iade_kargo')
const tedarikciİade = document.getElementById('tedarikci_iade')

// İade Verileri
const iadeCiro = document.getElementById('iade_ciro')
const iadeKomisyonOranı = document.getElementById('iade_komisyon_orani')
const iadePaketSayısı = document.getElementById('iade_paket_sayisi')
const iadeUrunMaliyet = document.getElementById('urun_maliyet_iade')

// Kayıt vars
const kayitData = document.querySelector('.kayit')
const remove = document.getElementById('remove_kayit')

// Hesapla btn vars
const hesaplaBtn = document.getElementById('hesapla')

// Functions
let hesapObj = {};

const hesap = () => {
  // Tarih Aralığı
  var tarih = gonderiTarihi.value

  // Gelir
  var gondCiro = (gonderiCiro.value*1)
  var iadeKDV = Math.round(((iadeCiro.value/100)*10))
  var iadeKomMal = Math.round(((iadeCiro.value/100)*iadeKomisyonOranı.value))
  var tedarikciİadeMal = tedarikciİade.value*1

  //Gider
  var iadeCiroMaliyeti = iadeCiro.value*1
  var gondKomOran = gonderiKomisyon.value*1
  var gondKDV = Math.round(((gondCiro/100)*10))
  var gondKom = Math.round(((gondCiro/100)*gondKomOran))
  var gondKargoMaliyeti = gonderiKargo.value*1
  var gondUrunMaliyeti = gonderiUrunMaliyeti.value*1
  var gondPaketMaliyeti = gonderiPaketSayisi.value*5
  var gondReklamMaliyeti = gonderiReklam.value*1
  var iadeKargoMaliyeti = iadeKargo.value*1
  var iadePaketMaliyeti = iadePaketSayısı.value*5
  var iadeUruMal = iadeUrunMaliyet.value*1
  var iadeUrunSay = iadePaketSayısı.value
  var gondPaketSay = gonderiPaketSayisi.value
  

  // Kar Hesap
  var gelir = gondCiro + iadeKDV + iadeKomMal + tedarikciİadeMal
  var gider = gondKDV + gondKom + gondKargoMaliyeti + gondUrunMaliyeti + gondPaketMaliyeti + gondReklamMaliyeti + iadeKargoMaliyeti + iadeCiroMaliyeti

  var kar = gelir - gider
  var adetBasiKar = kar/(gonderiPaketSayisi.value - iadePaketSayısı.value)
  var adetReklam = gondReklamMaliyeti/(gonderiPaketSayisi.value - iadePaketSayısı.value)

  return {
    tarih,
    kar,
    gelir, 
    gider,
    iadeKDV,
    iadeKomMal,
    iadeCiroMaliyeti,
    iadeKargoMaliyeti,
    iadePaketMaliyeti,
    gondKDV,
    gondKom,
    gondKargoMaliyeti,
    gondUrunMaliyeti,
    gondPaketMaliyeti,
    gondReklamMaliyeti,
    gondCiro,
    gondKomOran,
    iadeUruMal,
    tedarikciİadeMal,
    iadeUrunSay,
    gondPaketSay,
    adetBasiKar,
    adetReklam
  }
}

// İnserting Data
const insertData = (hesapObj) => {
  let li = document.createElement('li')
  li.className = 'kayit_list'
  li.innerHTML = `
    <span>x</span id="remove_kayit">
    <p>Tarih: ${hesapObj.tarih}</p>
    <p> Komisyon Oranı: <strong> ${hesapObj.gondKomOran}</strong></p>
    <p> <strong> Gelir </strong></p>
    / Paket Sayısı: <strong>${hesapObj.gondPaketSay}</strong>
    / Ciro: <strong>${hesapObj.gondCiro} TL </strong>
    / İadeKDV: <strong>${hesapObj.iadeKDV} TL </strong>
    / İadeT.Komisyon: <strong>${hesapObj.iadeKomMal} TL </strong>
    / Toplam: <strong>${hesapObj.gelir} TL </strong>
    / Tedarikçi İade: <strong>${hesapObj.tedarikciİadeMal} TL </strong>

    <p> <strong> Gider </strong></p>
    G.KDV: <strong> ${hesapObj.gondKDV} TL </strong>
    / G.Komisyon: <strong> ${hesapObj.gondKom} TL </strong>
    / G.Kargo: <strong> ${hesapObj.gondKargoMaliyeti} TL </strong>
    / G.Ürün Maliyeti: <strong> ${hesapObj.gondUrunMaliyeti} TL </strong>
    / G.Paket: <strong> ${hesapObj.gondPaketMaliyeti} TL </strong>
    / Reklam: <strong> ${hesapObj.gondReklamMaliyeti} TL </strong>
    / iade Kargo: <strong> ${hesapObj.iadeKargoMaliyeti} TL </strong>
    / iade Ciro: <strong> ${hesapObj.iadeCiroMaliyeti} TL </strong>

    <p> <strong>Genel Toplam</strong> </p>
    / Gelir: <strong> ${hesapObj.gelir} TL </strong>
    / Gider: <strong> ${hesapObj.gider} TL </strong>
    / Kar: <strong> ${hesapObj.kar} TL </strong> 
    / Adet Başı Kar: <strong> ${hesapObj.adetBasiKar} TL </strong> 
    / Adet Reklam: <strong> ${hesapObj.adetReklam} TL </strong> 
    / İade Stok: <strong> ${hesapObj.iadeUruMal} TL (${hesapObj.iadeUrunSay} Ürün) </strong>
    


  `
  kayitData.appendChild(li)

}

// Event Listeners
hesaplaBtn.addEventListener('click',() => {
  hesapObj = hesap()
  console.log(hesapObj)
  insertData(hesapObj)

})

