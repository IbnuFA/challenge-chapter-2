/*
    Tugas kamu adalah membuat sebuah function yang 
    berfungsi membantu Pak Aldi untuk menghitung total 
    seluruh sepatu yang terjual 
*/

const dataPenjualanPakAld = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
]


function hitungTotalPenjualan(dataPenjualan){
    let sum = 0;
    dataPenjualan.forEach(function(dataPenjualan) {
        let total = dataPenjualan.hargaSatuan * dataPenjualan.totalTerjual;
        sum += total;
    });
    console.log(sum);
}

hitungTotalPenjualan(dataPenjualanPakAld);

