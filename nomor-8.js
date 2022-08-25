/*
    Tugas kamu adalah membuat sebuah function yang berfungsi 
    membantu Ibu Daniela untuk mendapatkan informasi berupa Total 
    Keuntungan, Total Modal, Produk Buku Terlaris, Penulis Buku 
    Terlaris dan Persentase Keuntungan dari data penjualan yang telah 
    disediakan
*/

const dataPenjualanNovel = [
    {
        idProduct : 'BOOK002421',
        namaProduk : 'Pulang-Pergi',
        penulis : 'Tere Liye',
        hargaBeli : 60000,
        hargaJual : 86000,
        totalTerjual : 150,
        sisaStok : 17,
    },
    {
        idProduct : 'BOOK002351',
        namaProduk : 'Selama Tinggal',
        penulis : 'Tere Liye',
        hargaBeli : 75000,
        hargaJual : 103000,
        totalTerjual : 171,
        sisaStok : 20,
    },
    {
        idProduct : 'BOOK002941',
        namaProduk : 'Garis Waktu',
        penulis : 'Fiersa Besari',
        hargaBeli : 67000,
        hargaJual : 99000,
        totalTerjual : 213,
        sisaStok : 5,
    },
    {
        idProduct : 'BOOK002941',
        namaProduk : 'Laskar Pelangi',
        penulis : 'Andrea Hirata',
        hargaBeli : 55000,
        hargaJual : 68000,
        totalTerjual : 20,
        sisaStok : 56,
    },
    
]

function getInfoPenjualan(dataPenjualan) {
    //inisialisasi
    let untung = 0;
    let modal = 0;
    
    //untung
    dataPenjualan.forEach(function(dataPenjualan) {
        const total = dataPenjualan.hargaJual * dataPenjualan.totalTerjual;
        untung += total;
    });

    //modal
    dataPenjualan.forEach(function(dataPenjualan) {
        const total = (dataPenjualan.totalTerjual + dataPenjualan.sisaStok) * dataPenjualan.hargaBeli;
        modal += total;
    });
    

    //function rupiah
    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
          { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
    }

    //Presentase keuntungan
    const presentase = Math.round((untung - modal) / modal * 100)

    // paling laris
    // mencari value total terjual terbesar
    const maxTerjual = Math.max(...dataPenjualan.map(i => i.totalTerjual));
    // mencari dan mengambil object dengan value total terjual terbesar
    const dataTerlaris = dataPenjualan.find(buku => buku.totalTerjual === maxTerjual);


    const infoPenjualan = {
        totalKeuntungan : formatRupiah(untung),
        totalModal : formatRupiah(modal),
        presentaseKeuntungan : presentase + '%',
        produkBukuTerlaris : dataTerlaris.namaProduk,
        penulisTerlaris : dataTerlaris.penulis
    }

    console.log(infoPenjualan);

}

getInfoPenjualan(dataPenjualanNovel);